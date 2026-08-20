"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  UploadCloud,
  FileText,
  X,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/lib/config";
import { ACCEPTED_FILE_TYPES, MAX_FILE_SIZE } from "@/lib/validation/opportunity";

export default function OpportunityForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    category: "Real Estate",
    fundingRequired: "",
    websiteUrl: "",
    description: "",
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (file: File) => {
    setFileError(null);
    if (file.size > MAX_FILE_SIZE) {
      setFileError("File size exceeds 10MB limit.");
      return;
    }
    if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
      setFileError("Unsupported file format. Accepted: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG.");
      return;
    }
    setSelectedFile(file);
  };

  const removeFile = () => {
    setSelectedFile(null);
    setFileError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");
    setErrors({});

    try {
      const payload = new FormData();
      payload.append("fullName", formData.fullName);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("companyName", formData.companyName);
      payload.append("category", formData.category);
      payload.append("fundingRequired", formData.fundingRequired);
      payload.append("websiteUrl", formData.websiteUrl);
      payload.append("description", formData.description);

      if (selectedFile) {
        payload.append("document", selectedFile);
      }

      const res = await fetch("/api/submit-opportunity", {
        method: "POST",
        body: payload,
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.details) {
          const formattedErrors: Record<string, string> = {};
          Object.keys(data.details).forEach((key) => {
            if (data.details[key] && data.details[key].length > 0) {
              formattedErrors[key] = data.details[key][0];
            }
          });
          setErrors(formattedErrors);
        } else {
          setErrorMessage(data.error || "Form submission failed.");
        }
        setSubmitStatus("error");
      } else {
        setSubmitStatus("success");
      }
    } catch (err: any) {
      setSubmitStatus("error");
      setErrorMessage("Network error occurred. Please verify connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="p-6 sm:p-12 bg-white border border-black/10 rounded-xs text-center shadow-xl max-w-2xl mx-auto"
      >
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#3B0E47]/10 text-[#3B0E47] rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
        </div>
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-mono text-[#C5A265] block mb-2 font-bold">
          SUBMISSION SUCCESSFUL
        </span>
        <h2 className="heading-ayat text-2xl sm:text-4xl text-[#0B0A0E] font-extrabold uppercase mb-4">
          OPPORTUNITY RECEIVED.
        </h2>
        <p className="text-xs sm:text-sm text-[#1A1A1C]/80 font-light leading-relaxed mb-8">
          Thank you for presenting your opportunity. Our team will review the information provided and contact you if it aligns with our investment focus.
        </p>
        <div className="p-3.5 sm:p-4 bg-[#F9F8F6] rounded-xs text-[11px] sm:text-xs font-mono text-[#1A1A1C]/70 mb-8 border border-black/10">
          Proposal Identifier: TUB-{Date.now().toString().slice(-6)}
        </div>
        <button
          onClick={() => {
            setSubmitStatus("idle");
            setFormData({
              fullName: "",
              email: "",
              phone: "",
              companyName: "",
              category: "Real Estate",
              fundingRequired: "",
              websiteUrl: "",
              description: "",
            });
            setSelectedFile(null);
          }}
          className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-widest text-[#0B0A0E] bg-[#C5A265] hover:bg-white transition-all rounded-xs shadow-md"
        >
          Submit Another Proposal
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
      {submitStatus === "error" && errorMessage && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs font-mono rounded-xs flex items-center space-x-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* 1. Personal Information */}
      <div className="space-y-4 sm:space-y-6">
        <div className="border-b border-black/10 pb-2">
          <h3 className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-[#3B0E47] font-mono">
            01. PERSONAL & CONTACT DETAILS
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider mb-1.5 sm:mb-2 text-[#0B0A0E] font-bold">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="e.g. Adewale Okafor"
              className={`w-full px-3.5 py-3 text-xs sm:text-sm bg-white border ${
                errors.fullName ? "border-red-500" : "border-black/20"
              } rounded-xs focus:outline-none focus:border-[#3B0E47] text-[#0B0A0E] min-h-[44px]`}
            />
            {errors.fullName && (
              <p className="mt-1 text-[10px] text-red-500 font-mono">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider mb-1.5 sm:mb-2 text-[#0B0A0E] font-bold">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="e.g. adewale@company.com"
              className={`w-full px-3.5 py-3 text-xs sm:text-sm bg-white border ${
                errors.email ? "border-red-500" : "border-black/20"
              } rounded-xs focus:outline-none focus:border-[#3B0E47] text-[#0B0A0E] min-h-[44px]`}
            />
            {errors.email && (
              <p className="mt-1 text-[10px] text-red-500 font-mono">{errors.email}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider mb-1.5 sm:mb-2 text-[#0B0A0E] font-bold">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="e.g. +234 803 000 0000"
            className={`w-full px-3.5 py-3 text-xs sm:text-sm bg-white border ${
              errors.phone ? "border-red-500" : "border-black/20"
            } rounded-xs focus:outline-none focus:border-[#3B0E47] text-[#0B0A0E] min-h-[44px]`}
          />
          {errors.phone && (
            <p className="mt-1 text-[10px] text-red-500 font-mono">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* 2. Opportunity Details */}
      <div className="space-y-4 sm:space-y-6">
        <div className="border-b border-black/10 pb-2">
          <h3 className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-[#3B0E47] font-mono">
            02. OPPORTUNITY CLASSIFICATION
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider mb-1.5 sm:mb-2 text-[#0B0A0E] font-bold">
              Company / Project Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="e.g. Lekki Heights Commercial Hub"
              className={`w-full px-3.5 py-3 text-xs sm:text-sm bg-white border ${
                errors.companyName ? "border-red-500" : "border-black/20"
              } rounded-xs focus:outline-none focus:border-[#3B0E47] text-[#0B0A0E] min-h-[44px]`}
            />
            {errors.companyName && (
              <p className="mt-1 text-[10px] text-red-500 font-mono">{errors.companyName}</p>
            )}
          </div>

          <div>
            <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider mb-1.5 sm:mb-2 text-[#0B0A0E] font-bold">
              Investment Category <span className="text-red-500">*</span>
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-3.5 py-3 text-xs sm:text-sm bg-white border border-black/20 rounded-xs focus:outline-none focus:border-[#3B0E47] text-[#0B0A0E] min-h-[44px]"
            >
              {COMPANY_CONFIG.investmentCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider mb-1.5 sm:mb-2 text-[#0B0A0E] font-bold">
              Capital Required <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fundingRequired"
              required
              value={formData.fundingRequired}
              onChange={handleInputChange}
              placeholder="e.g. ₦150,000,000 or $250,000"
              className={`w-full px-3.5 py-3 text-xs sm:text-sm bg-white border ${
                errors.fundingRequired ? "border-red-500" : "border-black/20"
              } rounded-xs focus:outline-none focus:border-[#3B0E47] text-[#0B0A0E] min-h-[44px]`}
            />
            {errors.fundingRequired && (
              <p className="mt-1 text-[10px] text-red-500 font-mono">{errors.fundingRequired}</p>
            )}
          </div>

          <div>
            <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider mb-1.5 sm:mb-2 text-[#0B0A0E] font-bold">
              Website / URL <span className="text-gray-400">(Optional)</span>
            </label>
            <input
              type="url"
              name="websiteUrl"
              value={formData.websiteUrl}
              onChange={handleInputChange}
              placeholder="https://..."
              className={`w-full px-3.5 py-3 text-xs sm:text-sm bg-white border ${
                errors.websiteUrl ? "border-red-500" : "border-black/20"
              } rounded-xs focus:outline-none focus:border-[#3B0E47] text-[#0B0A0E] min-h-[44px]`}
            />
            {errors.websiteUrl && (
              <p className="mt-1 text-[10px] text-red-500 font-mono">{errors.websiteUrl}</p>
            )}
          </div>
        </div>
      </div>

      {/* 3. Executive Proposal Summary */}
      <div className="space-y-4 sm:space-y-6">
        <div className="border-b border-black/10 pb-2">
          <h3 className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-[#3B0E47] font-mono">
            03. EXECUTIVE PROPOSAL SUMMARY
          </h3>
        </div>
        <div>
          <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider mb-1.5 sm:mb-2 text-[#0B0A0E] font-bold">
            Brief Description of Opportunity <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            rows={5}
            required
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Summarize core fundamentals: location, current revenue/yield, capital utilization plan, expected returns..."
            className={`w-full px-3.5 py-3 text-xs sm:text-sm bg-white border ${
              errors.description ? "border-red-500" : "border-black/20"
            } rounded-xs focus:outline-none focus:border-[#3B0E47] text-[#0B0A0E]`}
          />
          {errors.description && (
            <p className="mt-1 text-[10px] text-red-500 font-mono">{errors.description}</p>
          )}
        </div>
      </div>

      {/* 4. Supporting Document Upload */}
      <div className="space-y-3 sm:space-y-4">
        <div className="border-b border-black/10 pb-2">
          <h3 className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-[#3B0E47] font-mono">
            04. ATTACH SUPPORTING DOCUMENTATION
          </h3>
        </div>
        <p className="text-xs text-[#1A1A1C]/60 font-light">
          Upload pitch deck, financial model, or title documents (Max 10MB: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG).
        </p>

        {!selectedFile ? (
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-black/20 hover:border-[#3B0E47] p-6 sm:p-8 rounded-xs text-center bg-white cursor-pointer transition-colors"
          >
            <UploadCloud className="w-8 h-8 sm:w-10 sm:h-10 text-[#3B0E47] mx-auto mb-2 opacity-60" />
            <p className="text-xs font-mono font-bold text-[#0B0A0E] uppercase tracking-wider mb-1">
              Click or drag document to upload
            </p>
            <p className="text-[10px] text-[#1A1A1C]/50 font-mono">PDF, DOCX, XLSX, or images up to 10MB</p>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg"
              className="hidden"
            />
          </div>
        ) : (
          <div className="p-3.5 sm:p-4 bg-white border border-black/20 rounded-xs flex items-center justify-between">
            <div className="flex items-center space-x-3 truncate">
              <FileText className="w-5 h-5 text-[#3B0E47] flex-shrink-0" />
              <div className="truncate">
                <p className="text-xs font-bold text-[#0B0A0E] truncate">
                  {selectedFile.name}
                </p>
                <p className="text-[10px] font-mono text-[#1A1A1C]/50">
                  {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={removeFile}
              className="p-1 text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {fileError && <p className="text-xs text-red-500 font-mono">{fileError}</p>}
      </div>

      {/* Privacy Guarantee & Submit Button */}
      <div className="pt-6 border-t border-black/10 space-y-4">
        <div className="flex items-center space-x-2 text-xs text-[#1A1A1C]/60 font-light">
          <ShieldCheck className="w-4 h-4 text-[#3B0E47] flex-shrink-0" />
          <span>Strict Non-Disclosure & Fiduciary Confidentiality Assured.</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center px-8 py-4 text-xs font-mono font-bold uppercase tracking-widest text-[#0B0A0E] bg-[#C5A265] hover:bg-white transition-all duration-300 rounded-xs shadow-xl gold-glow disabled:opacity-50 min-h-[48px]"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin text-[#0B0A0E]" />
              <span>Processing Proposal...</span>
            </>
          ) : (
            <>
              <span>Submit Opportunity</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
