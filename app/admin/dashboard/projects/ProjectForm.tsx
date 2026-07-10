'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { FiArrowLeft } from 'react-icons/fi';
import { FormField, SaveButton, PageHeader, inputClass, textareaClass } from '../components/FormField';

type ProjectFormData = {
  title: string;
  description: string;
  image: string;
  tags: string; // comma-separated
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  order: number;
};

export default function ProjectForm({ id }: { id?: string }) {
  const router = useRouter();
  const isEdit = !!id;
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ProjectFormData>({
    defaultValues: { featured: false, order: 0 },
  });

  useEffect(() => {
    if (!isEdit) return;
    fetch(`/api/admin/projects/${id}`)
      .then(r => r.json())
      .then(data => {
        if (data.success) reset({ ...data.data, tags: (data.data.tags || []).join(', ') });
        else toast.error('Project not found');
      });
  }, [id, isEdit, reset]);

  const onSubmit = async (values: ProjectFormData) => {
    const payload = {
      ...values,
      tags: values.tags.split(',').map((s: string) => s.trim()).filter(Boolean),
      order: Number(values.order),
    };
    const url = isEdit ? `/api/admin/projects/${id}` : '/api/admin/projects';
    const method = isEdit ? 'PUT' : 'POST';
    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(isEdit ? 'Project updated!' : 'Project added!');
        router.push('/admin/dashboard/projects');
      } else {
        toast.error(data.error || 'Save failed');
      }
    } catch {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/dashboard/projects" className="text-gray-400 hover:text-white transition">
          <FiArrowLeft size={18} />
        </Link>
        <PageHeader title={isEdit ? 'Edit Project' : 'Add Project'} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 space-y-5">
        <FormField label="Title" required error={errors.title?.message}>
          <input {...register('title', { required: 'Title is required' })} className={inputClass} placeholder="E-Commerce Platform" />
        </FormField>

        <FormField label="Description" required error={errors.description?.message}>
          <textarea {...register('description', { required: 'Description is required' })} rows={3} className={textareaClass} placeholder="Full-stack e-commerce solution…" />
        </FormField>

        <FormField label="Image URL" hint="Path relative to /public or a Cloudinary URL">
          <input {...register('image')} className={inputClass} placeholder="/ecom.png or https://res.cloudinary.com/…" />
        </FormField>

        <FormField label="Tags" hint="Comma-separated e.g: Next.js, Tailwind, MongoDB">
          <input {...register('tags')} className={inputClass} placeholder="Next.js, Tailwind CSS, MongoDB, Stripe" />
        </FormField>

        <div className="grid sm:grid-cols-2 gap-4">
          <FormField label="GitHub URL" error={errors.githubUrl?.message}>
            <input {...register('githubUrl')} className={inputClass} placeholder="https://github.com/…" />
          </FormField>
          <FormField label="Live URL" error={errors.liveUrl?.message}>
            <input {...register('liveUrl')} className={inputClass} placeholder="https://…vercel.app" />
          </FormField>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <FormField label="Display Order" hint="Lower = shown first">
            <input type="number" {...register('order', { valueAsNumber: true })} className={inputClass} placeholder="0" />
          </FormField>
          <div className="flex items-center gap-3 pt-7">
            <input
              type="checkbox"
              id="featured"
              {...register('featured')}
              className="w-4 h-4 rounded border-[#30363d] bg-[#0d1117] text-cyan-500 focus:ring-cyan-500"
            />
            <label htmlFor="featured" className="text-sm text-gray-300">Mark as Featured</label>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <SaveButton loading={isSubmitting} label={isEdit ? 'Update Project' : 'Add Project'} />
          <Link href="/admin/dashboard/projects" className="px-4 py-2.5 text-sm text-gray-400 hover:text-white border border-[#30363d] rounded-lg transition-colors">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
