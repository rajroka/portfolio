'use client';

import { useForm, FieldError } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
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
    reset 
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
    alert('Something went wrong.');
  }
  };

  const renderError = (error: FieldError | undefined) => {
    return error ? <p className="mt-1 text-sm text-red-400">{error.message}</p> : null;
  };

  return (
    <div id="contact"  className="  font-poppins  relative min-h-screen py-20 bg-[#f6f5f3]">
   <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-24 left-16 w-40 h-40 rounded-full bg-amber-500 mix-blend-multiply filter blur-2xl animate-blob" />
        <div className="absolute top-1/3 right-16 w-48 h-48 rounded-full bg-cyan-500 mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-52 h-52 rounded-full bg-amber-600 mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 w-full max-w-4xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#161b22] mb-4">
         <span className="text-[#161b22]">Talk with me </span>
          </h2>
          <p className="text-[#161b22] text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full max-w-2xl bg-[#161b22] rounded-xl p-8 shadow-lg border border-[#3a4556]"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 bg-[#1a1f2b] border border-[#3a4556] rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white"
                  placeholder="John Doe"
                />
                {renderError(errors.name)}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="w-full px-4 py-3 bg-[#1a1f2b] border border-[#3a4556] rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white"
                  placeholder="john@example.com"
                />
                {renderError(errors.email)}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                {...register('subject', { required: 'Subject is required' })}
                className="w-full px-4 py-3 bg-[#1a1f2b] border border-[#3a4556] rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white"
                placeholder="Project Inquiry"
              />
              {renderError(errors.subject)}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                {...register('message', { required: 'Message is required' })}
                className="w-full px-4 py-3 bg-[#1a1f2b] border border-[#3a4556] rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white"
                placeholder="Tell me about your project..."
              ></textarea>
              {renderError(errors.message)}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center w-full px-8 py-3 bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-medium rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <FiSend className="mr-2" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}