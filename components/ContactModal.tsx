'use client';

import { useForm, FieldError } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiX } from 'react-icons/fi';
import toast from 'react-hot-toast';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const renderError = (error: FieldError | undefined) =>
    error ? <p className="mt-1 font-mono text-[10px] tracking-normal text-red-600">{error.message}</p> : null;

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        toast.success('Message sent!');
        reset();
        onClose();
      } else {
        toast.error('Failed to send. Try again.');
      }
    } catch {
      toast.error('Something went wrong.');
    }
  };

  const inputClass =
    'w-full rounded-lg border border-line bg-white/70 px-4 py-3 font-sans text-sm text-ink placeholder:text-ink-soft/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            aria-modal="true"
            role="dialog"
          >
            <div className="corners relative w-full max-w-lg border border-line bg-paper p-8 shadow-2xl">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 rounded-lg p-1 font-mono text-sm text-ink-soft transition-colors hover:text-accent"
                aria-label="Close"
              >
                ✕
              </button>

              <h2 className="display mt-4 text-3xl text-ink">Get in touch</h2>
              <p className="mt-3 font-mono text-sm tracking-normal text-ink-soft">
                Have a project in mind? Let&apos;s talk.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="modal-name" className="label mb-2 block text-ink-soft">
                      Name
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      placeholder="John Doe"
                      {...register('name', { required: 'Name is required' })}
                      className={inputClass}
                    />
                    {renderError(errors.name)}
                  </div>
                  <div>
                    <label htmlFor="modal-email" className="label mb-2 block text-ink-soft">
                      Email
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      placeholder="john@example.com"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email',
                        },
                      })}
                      className={inputClass}
                    />
                    {renderError(errors.email)}
                  </div>
                </div>

                <div>
                  <label htmlFor="modal-subject" className="label mb-2 block text-ink-soft">
                    Subject
                  </label>
                  <input
                    id="modal-subject"
                    type="text"
                    placeholder="Project inquiry"
                    {...register('subject', { required: 'Subject is required' })}
                    className={inputClass}
                  />
                  {renderError(errors.subject)}
                </div>

                <div>
                  <label htmlFor="modal-message" className="label mb-2 block text-ink-soft">
                    Message
                  </label>
                  <textarea
                    id="modal-message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    {...register('message', { required: 'Message is required' })}
                    className={`${inputClass} resize-none`}
                  />
                  {renderError(errors.message)}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-ink py-3.5 font-mono text-sm tracking-normal text-paper transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send message <FiArrowUpRight />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
