'use client';

import { useForm, FieldError } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import toast from 'react-hot-toast';
import Link from 'next/link';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const renderError = (error: FieldError | undefined) =>
    error ? <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-red-600">{error.message}</p> : null;

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
      } else {
        toast.error('Failed to send. Try again.');
      }
    } catch {
      toast.error('Something went wrong.');
    }
  };

  const inputClass =
    'w-full border border-line bg-white/70 px-4 py-3 font-sans text-sm text-ink placeholder:text-ink-soft/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent';

  return (
    <main className="min-h-screen py-20">
      <div className="mx-auto max-w-lg px-6">
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] uppercase text-ink-soft transition-colors hover:text-accent"
        >
          ← Back to index
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-10"
        >
          <h1 className="display mt-4 text-4xl text-ink md:text-5xl">Get in touch</h1>
          <p className="mt-3 font-mono text-xs tracking-[0.1em] uppercase text-ink-soft">
            Have a project in mind? Let&apos;s talk.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="label mb-2 block text-ink-soft">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="John Doe"
                  {...register('name', { required: 'Name is required' })}
                  className={inputClass}
                />
                {renderError(errors.name)}
              </div>
              <div>
                <label htmlFor="contact-email" className="label mb-2 block text-ink-soft">
                  Email
                </label>
                <input
                  id="contact-email"
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
              <label htmlFor="contact-subject" className="label mb-2 block text-ink-soft">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                placeholder="Project inquiry"
                {...register('subject', { required: 'Subject is required' })}
                className={inputClass}
              />
              {renderError(errors.subject)}
            </div>

            <div>
              <label htmlFor="contact-message" className="label mb-2 block text-ink-soft">
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder="Tell me about your project..."
                {...register('message', { required: 'Message is required' })}
                className={`${inputClass} resize-none`}
              />
              {renderError(errors.message)}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 bg-ink py-3.5 font-mono text-xs tracking-[0.14em] uppercase text-paper transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  Send message <FiArrowUpRight />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}