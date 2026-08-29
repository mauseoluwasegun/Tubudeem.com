"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");
    setErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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
          setErrorMessage(data.error || "Message could not be sent.");
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
        className="p-6 sm:p-10 bg-white border border-[#42124F]/15 rounded-xs text-center shadow-xl"
      >
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#42124F]/10 text-[#42124F] rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
        </div>
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-mono text-[#C7A45B] block mb-2 font-bold">
          MESSAGE SENT
        </span>
        <h3 className="heading-ayat text-xl sm:text-2xl text-[#111015] font-extrabold uppercase mb-3">
          THANK YOU.
        </h3>
        <p className="text-xs sm:text-sm text-[#242127]/80 font-light leading-relaxed mb-6">
          We&apos;ve received your message and will get back to you as soon as possible.
        </p>
        <button
          onClick={() => {
            setSubmitStatus("idle");
            setFormData({ name: "", email: "", subject: "", message: "" });
          }}
          className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-widest text-[#111015] bg-[#C7A45B] hover:bg-white transition-all rounded-xs shadow-md"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
      {submitStatus === "error" && errorMessage && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs font-mono rounded-xs flex items-center space-x-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider mb-1.5 sm:mb-2 text-[#111015] font-bold">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            placeholder="e.g. Michael Bello"
            className={`w-full px-3.5 py-3 text-xs sm:text-sm bg-white border ${
              errors.name ? "border-red-500" : "border-[#42124F]/20"
            } rounded-xs focus:outline-none focus:border-[#42124F] text-[#111015] min-h-[44px]`}
          />
          {errors.name && <p className="mt-1 text-[10px] text-red-500 font-mono">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider mb-1.5 sm:mb-2 text-[#111015] font-bold">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            placeholder="e.g. michael@example.com"
            className={`w-full px-3.5 py-3 text-xs sm:text-sm bg-white border ${
              errors.email ? "border-red-500" : "border-[#42124F]/20"
            } rounded-xs focus:outline-none focus:border-[#42124F] text-[#111015] min-h-[44px]`}
          />
          {errors.email && <p className="mt-1 text-[10px] text-red-500 font-mono">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider mb-1.5 sm:mb-2 text-[#111015] font-bold">
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="subject"
          required
          value={formData.subject}
          onChange={handleInputChange}
          placeholder="Inquiry regarding..."
          className={`w-full px-3.5 py-3 text-xs sm:text-sm bg-white border ${
            errors.subject ? "border-red-500" : "border-[#42124F]/20"
          } rounded-xs focus:outline-none focus:border-[#42124F] text-[#111015] min-h-[44px]`}
        />
        {errors.subject && <p className="mt-1 text-[10px] text-red-500 font-mono">{errors.subject}</p>}
      </div>

      <div>
        <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider mb-1.5 sm:mb-2 text-[#111015] font-bold">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleInputChange}
          placeholder="How can we help you?"
          className={`w-full px-3.5 py-3 text-xs sm:text-sm bg-white border ${
            errors.message ? "border-red-500" : "border-[#42124F]/20"
          } rounded-xs focus:outline-none focus:border-[#42124F] text-[#111015]`}
        />
        {errors.message && <p className="mt-1 text-[10px] text-red-500 font-mono">{errors.message}</p>}
      </div>

      <div className="pt-2 space-y-4">
        <div className="flex items-center space-x-2 text-[11px] text-[#242127]/60 font-light">
          <ShieldCheck className="w-4 h-4 text-[#42124F] flex-shrink-0" />
          <span>Your details are kept confidential and used only to respond to your message.</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center px-8 py-4 text-xs font-mono font-bold uppercase tracking-widest text-[#111015] bg-[#C7A45B] hover:bg-white transition-all duration-300 rounded-xs shadow-xl gold-glow disabled:opacity-50 min-h-[48px]"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin text-[#111015]" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
