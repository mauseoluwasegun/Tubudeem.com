import { NextRequest, NextResponse } from "next/server";
import { opportunityFormSchema, ACCEPTED_FILE_TYPES, MAX_FILE_SIZE } from "@/lib/validation/opportunity";
import { COMPANY_CONFIG } from "@/lib/config";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const companyName = formData.get("companyName") as string;
    const category = formData.get("category") as string;
    const fundingRequired = formData.get("fundingRequired") as string;
    const websiteUrl = (formData.get("websiteUrl") as string) || "";
    const description = formData.get("description") as string;
    const file = formData.get("document") as File | null;

    // 1. Zod Validation
    const validationResult = opportunityFormSchema.safeParse({
      fullName,
      email,
      phone,
      companyName,
      category,
      fundingRequired,
      websiteUrl,
      description,
    });

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // 2. File Upload Inspection & Validation
    let attachmentDetails: { filename: string; content?: Buffer; path?: string } | null = null;

    if (file && file.size > 0) {
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          {
            success: false,
            error: "File size exceeds the 10MB limit.",
          },
          { status: 400 }
        );
      }

      if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
        return NextResponse.json(
          {
            success: false,
            error: "Invalid file format. Accepted formats: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG.",
          },
          { status: 400 }
        );
      }

      // Safe filename sanitize
      const sanitizedFilename = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      // Save locally to scratch/uploads for record keeping
      const uploadsDir = path.join(process.cwd(), "scratch_uploads");
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }
      const filePath = path.join(uploadsDir, sanitizedFilename);
      fs.writeFileSync(filePath, buffer);

      attachmentDetails = {
        filename: sanitizedFilename,
        content: buffer,
        path: filePath,
      };
    }

    const timestamp = new Date().toISOString();
    const submissionRecord = {
      timestamp,
      fullName,
      email,
      phone,
      companyName,
      category,
      fundingRequired,
      websiteUrl,
      description,
      attachment: attachmentDetails ? attachmentDetails.filename : "No attachment uploaded",
    };

    // Save JSON record to local audit log
    const logsDir = path.join(process.cwd(), "scratch_logs");
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    fs.appendFileSync(
      path.join(logsDir, "submissions.jsonl"),
      JSON.stringify(submissionRecord) + "\n"
    );

    // 3. Email Dispatch via Nodemailer (if SMTP env vars are present)
    if (process.env.SMTP_HOST && process.env.SMTP_USER) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"TUBUDEEM Opportunities" <${process.env.SMTP_USER}>`,
        to: COMPANY_CONFIG.recipientEmail,
        replyTo: email,
        subject: `[New Opportunity Submission] ${category} - ${companyName}`,
        text: `
NEW INVESTMENT OPPORTUNITY SUBMISSION
--------------------------------------
Timestamp: ${timestamp}
Applicant Name: ${fullName}
Email: ${email}
Phone: ${phone}
Company / Project: ${companyName}
Investment Category: ${category}
Funding Required: ${fundingRequired}
Website URL: ${websiteUrl || "N/A"}

DESCRIPTION:
${description}

Attachment: ${attachmentDetails ? attachmentDetails.filename : "None"}
        `,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #111015;">
            <h2 style="color: #42124F; border-bottom: 2px solid #C7A45B; padding-bottom: 10px;">
              New Investment Opportunity Submission
            </h2>
            <p><strong>Timestamp:</strong> ${timestamp}</p>
            <hr style="border: 0; border-top: 1px solid #eee;" />
            <p><strong>Applicant Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Company / Project:</strong> ${companyName}</p>
            <p><strong>Category:</strong> ${category}</p>
            <p><strong>Funding Required:</strong> ${fundingRequired}</p>
            <p><strong>Website / URL:</strong> ${websiteUrl ? `<a href="${websiteUrl}">${websiteUrl}</a>` : "N/A"}</p>
            <h3>Opportunity Summary:</h3>
            <div style="background: #F7F4EE; padding: 15px; border-left: 4px solid #42124F;">
              ${description.replace(/\n/g, "<br/>")}
            </div>
          </div>
        `,
        attachments: attachmentDetails
          ? [
              {
                filename: attachmentDetails.filename,
                content: attachmentDetails.content,
              },
            ]
          : [],
      };

      await transporter.sendMail(mailOptions);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Opportunity proposal received successfully.",
        submissionId: `TUB-${Date.now().toString().slice(-6)}`,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Submission API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An error occurred while processing your proposal. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}
