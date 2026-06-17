import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertTriangle, Loader2, Mail, Clock, MapPin } from 'lucide-react';
import Button from './ui/Button';

interface FormData {
  name: string;
  email: string;
  scope: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  scope?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    scope: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const scopeOptions = [
    { value: 'frontend', label: 'Frontend SaaS development (React/Next.js)' },
    { value: 'backend', label: 'Distributed Backend system (Spring Boot/Java)' },
    { value: 'infrastructure', label: 'Kubernetes deployment & Cloud Setup' },
    { value: 'fullstack', label: 'End-to-End Headless Application' },
    { value: 'consulting', label: 'Architecture & System Optimization audit' },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Please provide your name.';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email format.';
    }

    if (!formData.scope) tempErrors.scope = 'Please select a project category.';
    if (!formData.message.trim() || formData.message.length < 15) {
      tempErrors.message = 'Please provide a message outlining details (at least 15 characters).';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate an API endpoint handshake
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData(formData);
      // Reset form variables
      setFormData({
        name: '',
        email: '',
        scope: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-20 bg-slate-50/50 dark:bg-transparent">
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#6366f1] dark:text-indigo-400">
            Get In Touch
          </h2>
          <p className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            Initiate a Scope Discussion
          </p>
          <div className="mx-auto mt-4 h-1 w-12 rounded bg-indigo-600 dark:bg-indigo-500" />
          <p className="mt-5 text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            Let us know what structural problems you are looking to solve. We review briefs and reply with detailed architectural options within 2 operating hours.
          </p>
        </div>

        {/* Horizontal Dividers & Setup Info */}
        <div className="mx-auto mt-16 grid gap-12 lg:grid-cols-12 max-w-6xl">
          
          {/* Metadata Block cols-5 */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Contact Meta & Operations
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Connect directly with our engineering team. We do not use non-technical account managers; you will interface only with senior active partners.
              </p>

              {/* Operating Info Handlers */}
              <div className="space-y-5 mt-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-650 dark:bg-white/5 dark:text-indigo-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-450 dark:text-slate-400">
                      Primary Inboxes
                    </h4>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">
                      intake@apex-studios.io
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Secured using transit-layer TLS
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-650 dark:bg-white/5 dark:text-indigo-400">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-450 dark:text-slate-400">
                      Standard Core Hours
                    </h4>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">
                      08:00 - 18:00 UTC / EST / CET
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Monday through Friday (Dev Shifts Active)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-650 dark:bg-white/5 dark:text-indigo-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-450 dark:text-slate-400">
                      Operational Nodes
                    </h4>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">
                      Distributed Remote Co-locations
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Austin, TX &bull; Frankfurt, DE &bull; Zug, CH
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro-notice box */}
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white/40 p-5 dark:border-white/5 dark:bg-white/5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-indigo-400">
                PROMPT REPLY ENFORCED
              </span>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                We pride ourselves on direct, clear communication. We do not place user emails on marketing newsletters or sales cycle tools. Ever.
              </p>
            </div>
          </div>

          {/* Form Block / Success Screen cols-7 */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!submittedData ? (
                <motion.div
                  key="form-view"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-md"
                >
                  <form onSubmit={handleSubmit} id="contact-scope-form" className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      {/* Name input */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                          Your Name
                        </label>
                        <input
                          id="form-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Elena Rostova"
                          className={`
                            w-full rounded-full border px-4 py-3 text-sm bg-transparent outline-none transition-all
                            ${errors.name
                              ? 'border-red-500 ring-1 ring-red-500'
                              : 'border-slate-200 focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] dark:border-white/10 dark:focus:border-indigo-500 dark:focus:ring-indigo-500'
                            }
                          `}
                        />
                        {errors.name && (
                          <p className="flex items-center gap-1 text-[11px] font-bold text-red-500 leading-none">
                            <AlertTriangle className="h-3 w-3 shrink-0" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                          Email Address
                        </label>
                        <input
                          id="form-email"
                          type="text"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. elena@company.com"
                          className={`
                            w-full rounded-full border px-4 py-3 text-sm bg-transparent outline-none transition-all
                            ${errors.email
                              ? 'border-red-500 ring-1 ring-red-500'
                              : 'border-slate-200 focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] dark:border-white/10 dark:focus:border-indigo-500 dark:focus:ring-indigo-500'
                            }
                          `}
                        />
                        {errors.email && (
                          <p className="flex items-center gap-1 text-[11px] font-bold text-red-500 leading-none">
                            <AlertTriangle className="h-3 w-3 shrink-0" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Scope select */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                        Project Scope Target
                      </label>
                      <select
                        id="form-scope"
                        name="scope"
                        value={formData.scope}
                        onChange={handleInputChange}
                        className={`
                          w-full rounded-full border px-4 py-3 text-sm bg-white dark:bg-[#0a0a0b] outline-none transition-all appearance-none cursor-pointer
                          ${errors.scope
                            ? 'border-red-500 ring-1 ring-red-500'
                            : 'border-slate-200 focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] dark:border-white/10 dark:focus:border-indigo-500 dark:focus:ring-indigo-500'
                          }
                        `}
                      >
                        <option value="">-- Choose one of our operational fields --</option>
                        {scopeOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      {errors.scope && (
                        <p className="flex items-center gap-1 text-[11px] font-bold text-red-500 leading-none">
                          <AlertTriangle className="h-3 w-3 shrink-0" />
                          {errors.scope}
                        </p>
                      )}
                    </div>

                    {/* Message textarea */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                        Brief Project Details
                      </label>
                      <textarea
                        id="form-message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        placeholder="Please describe the concurrency limits, data structures, or performance challenges you face..."
                        className={`
                          w-full rounded-2xl border px-4 py-3 text-sm bg-transparent outline-none transition-all resize-none
                          ${errors.message
                            ? 'border-red-500 ring-1 ring-red-500'
                            : 'border-slate-200 focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] dark:border-white/10 dark:focus:border-indigo-500 dark:focus:ring-indigo-500'
                          }
                        `}
                      />
                      {errors.message && (
                        <p className="flex items-center gap-1 text-[11px] font-bold text-red-500 leading-none">
                          <AlertTriangle className="h-3 w-3 shrink-0" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      id="form-submit-btn"
                      variant="primary"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin text-white" />
                          Transmitting encrypted handshake...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Transmit Project Briefing
                        </>
                      )}
                    </Button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success-view"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-md"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                    Briefing Handshake Completed!
                  </h3>
                  
                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-305 leading-relaxed max-w-lg mx-auto">
                    Thank you, <strong className="text-slate-900 dark:text-indigo-400">{submittedData.name}</strong>. Your project context has been logged securely.
                  </p>

                  <div className="mx-auto mt-6 max-w-md rounded-2xl bg-slate-50 border border-slate-200/60 p-4 text-left space-y-2.5 dark:bg-white/5 dark:border-white/5">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      <strong>Handshake Meta Log:</strong>
                    </p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <span className="text-slate-400">Recipient Email:</span>
                      <span className="col-span-2 font-semibold text-slate-800 dark:text-white break-all">{submittedData.email}</span>
                      
                      <span className="text-slate-400">Project Scope:</span>
                      <span className="col-span-2 font-semibold text-slate-800 dark:text-indigo-400">
                        {scopeOptions.find(opt => opt.value === submittedData.scope)?.label || submittedData.scope}
                      </span>
                    </div>
                  </div>

                  <p className="mt-6 text-xs text-slate-550 dark:text-slate-450">
                    An active partner is analyzing your system constraints now. You will receive an email checklist summary within 2 operating hours.
                  </p>

                  <Button
                    id="reset-form-btn"
                    variant="outline"
                    onClick={() => setSubmittedData(null)}
                    className="mt-8 text-xs h-9 px-4 font-bold"
                  >
                    Submit Another Briefing
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
