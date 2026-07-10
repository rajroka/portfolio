'use client';

import { useForm, FieldError } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
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
    error ? <p className="mt-1 text-xs text-red-500">{error.message}</p> : null;

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

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-lg">

        {/* Back */}
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-cyan-700 transition-colors mb-8 inline-block"
        >
          ← Back to home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-4xl font-black text-gray-900 mb-1">
            Get in Touch<span className="text-cyan-700">.</span>
          </h1>
          <p className="text-gray-400 text-sm mb-8">
            Have a project in mind? Let&apos;s talk.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:border-transparent"
                />
                {renderError(errors.name)}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email',
                    },
                  })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:border-transparent"
                />
                {renderError(errors.email)}
              </div>
            </div>

            <div>
              <input
                type="text"
                placeholder="Subject"
                {...register('subject', { required: 'Subject is required' })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:border-transparent"
              />
              {renderError(errors.subject)}
            </div>

            <div>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                {...register('message', { required: 'Message is required' })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:border-transparent resize-none"
              />
              {renderError(errors.message)}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 w-full py-3 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm"
            >
              {isSubmitting ? 'Sending...' : <><FiSend size={14} /> Send Message</>}
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
