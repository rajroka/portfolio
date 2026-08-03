'use client';

import { useForm, FieldError } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import toast from 'react-hot-toast';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        toast.success('Message sent successfully!');
        reset();
      } else {
        toast.error('Failed to send message. Try again later.');
      }
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong.');
    }
  };

  const renderError = (error: FieldError | undefined) =>
    error ? <p className="mt-1 font-mono text-[10px] tracking-normal text-red-600">{error.message}</p> : null;

  const inputClass =
    'w-full rounded-lg border border-panel-line bg-panel px-4 py-3 font-sans text-sm text-panel-text placeholder:text-panel-soft/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent';

  return (
    <div id="contact" className="grid-bg-dark relative min-h-screen bg-panel py-20 text-panel-text">
      <div className="mx-auto max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <h2 className="display mt-5 text-[clamp(2.5rem,8vw,4rem)] text-panel-text">
            Let&apos;s talk
          </h2>
          <p className="mt-4 font-mono text-sm tracking-normal text-panel-soft">
            Have a project in mind or want to collaborate? Reach out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="corners mt-14 border border-panel-line bg-panel p-8"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="label mb-2 block text-panel-soft">
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
                <label htmlFor="contact-email" className="label mb-2 block text-panel-soft">
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
                      message: 'Invalid email address',
                    },
                  })}
                  className={inputClass}
                />
                {renderError(errors.email)}
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="label mb-2 block text-panel-soft">
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
              <label htmlFor="contact-message" className="label mb-2 block text-panel-soft">
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
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3.5 font-mono text-sm tracking-normal text-panel-text transition-colors hover:bg-accent-deep disabled:cursor-not-allowed disabled:opacity-60"
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
    </div>
  );
}
