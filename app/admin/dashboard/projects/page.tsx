'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { FiPlus, FiEdit2, FiTrash2, FiLoader, FiExternalLink, FiGithub } from 'react-icons/fi';
import { PageHeader } from '../components/FormField';

interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  order: number;
}

export default function ProjectsAdmin() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchProjects = () => {
    setLoading(true);
    fetch('/api/admin/projects')
      .then(r => r.json())
      .then(data => { if (data.success) setProjects(data.data); })
      .catch(() => toast.error('Failed to load projects'))
      .finally(() => setLoading(false));
  };

  useEffect(fetchProjects, []);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Delete project "${title}"?`)) return;
    setDeleting(id);
    try {
      const res = await fetch(`/api/admin/projects/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) { toast.success('Project deleted'); fetchProjects(); }
      else toast.error('Delete failed');
    } catch { toast.error('Something went wrong'); }
    finally { setDeleting(null); }
  };

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <PageHeader title="Projects" description="Manage your portfolio projects." />
        <Link
          href="/admin/dashboard/projects/new"
          className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium rounded-lg transition-colors"
        >
          <FiPlus size={15} /> Add Project
        </Link>
      </div>

      {loading ? (
        <div className="flex items-center gap-2 text-gray-400 py-8"><FiLoader className="animate-spin" /> Loading…</div>
      ) : projects.length === 0 ? (
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-10 text-center">
          <p className="text-gray-500 mb-4">No projects yet.</p>
          <Link href="/admin/dashboard/projects/new" className="text-cyan-400 hover:underline text-sm">Add your first project →</Link>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map(project => (
            <div key={project._id} className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-cyan-500/30 transition-colors">
              {/* Image */}
              <div className="relative h-40 bg-[#0d1117]">
                {project.image ? (
                  <Image src={project.image} alt={project.title} fill className="object-contain p-3" />
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-600 text-sm">No image</div>
                )}
                {project.featured && (
                  <span className="absolute top-2 left-2 text-xs bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-white text-sm mb-1">{project.title}</h3>
                <p className="text-gray-400 text-xs line-clamp-2 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 bg-[#0d1117] text-gray-400 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition" title="GitHub">
                        <FiGithub size={14} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition" title="Live">
                        <FiExternalLink size={14} />
                      </a>
                    )}
                  </div>
                  <div className="flex gap-1.5">
                    <Link href={`/admin/dashboard/projects/${project._id}`} className="p-1.5 text-gray-400 hover:text-cyan-400 hover:bg-[#0d1117] rounded transition" title="Edit">
                      <FiEdit2 size={13} />
                    </Link>
                    <button
                      onClick={() => handleDelete(project._id, project.title)}
                      disabled={deleting === project._id}
                      className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-[#0d1117] rounded transition"
                      title="Delete"
                    >
                      {deleting === project._id ? <FiLoader size={13} className="animate-spin" /> : <FiTrash2 size={13} />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
