import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contact";
import { COMPANY_CONFIG } from "@/lib/config";
import { Resend } from "resend";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const validationResult = contactFormSchema.safeParse(body);

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

    const { name, email, subject, message } = validationResult.data;
    const timestamp = new Date().toISOString();

    // Save JSON record to local audit log
    const logsDir = path.join(process.cwd(), "scratch_logs");
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    fs.appendFileSync(
      path.join(logsDir, "contact_messages.jsonl"),
      JSON.stringify({ timestamp, name, email, subject, message }) + "\n"
    );

    // Email Dispatch via Resend (if RESEND_API_KEY is present)
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);

      const fromAddress = process.env.RESEND_FROM_EMAIL || "contact@tubudeem.com";

      const { error: resendError } = await resend.emails.send({
        from: `TUBUDEEM Website <${fromAddress}>`,
        to: COMPANY_CONFIG.recipientEmail,
        replyTo: email,
        subject: `[Contact Form] ${subject}`,
        text: `
NEW CONTACT MESSAGE
--------------------
Timestamp: ${timestamp}
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
        `,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #111015;">
            <h2 style="color: #42124F; border-bottom: 2px solid #C7A45B; padding-bottom: 10px;">
              New Contact Message
            </h2>
            <p><strong>Timestamp:</strong> ${timestamp}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <div style="background: #F7F4EE; padding: 15px; border-left: 4px solid #42124F; margin-top: 12px;">
              ${message.replace(/\n/g, "<br/>")}
            </div>
          </div>
        `,
      });

      if (resendError) {
        console.error("Resend email error:", resendError);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An error occurred while sending your message. Please try again or email us directly.",
      },
      { status: 500 }
    );
  }
}
