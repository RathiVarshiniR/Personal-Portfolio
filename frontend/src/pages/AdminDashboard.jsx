import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaPlus, FaSignOutAlt, FaTrash, FaUpload } from 'react-icons/fa';
import api from '../lib/api';

const emptyProject = {
  title: '',
  description: '',
  image: '',
  githubLink: '',
  liveLink: '',
  technologies: '',
  featured: true,
};

function AdminDashboard() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(emptyProject);
  const [editingId, setEditingId] = useState(null);
  const [status, setStatus] = useState('');

  const loadProjects = async () => {
    const { data } = await api.get('/projects');
    setProjects(data);
  };

  useEffect(() => {
    let mounted = true;

    api
      .get('/projects')
      .then(({ data }) => {
        if (mounted) {
          setProjects(data);
        }
      })
      .catch(() => {
        if (mounted) {
          setStatus('Unable to load projects.');
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  const analytics = useMemo(
    () => [
      { label: 'Projects', value: projects.length },
      { label: 'Featured', value: projects.filter((project) => project.featured).length },
      { label: 'Tech Tags', value: new Set(projects.flatMap((project) => project.technologies || [])).size },
    ],
    [projects]
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Saving project...');

    const payload = {
      ...form,
      technologies: form.technologies
        .split(',')
        .map((tech) => tech.trim())
        .filter(Boolean),
    };

    try {
      if (editingId) {
        await api.put(`/projects/${editingId}`, payload);
      } else {
        await api.post('/projects', payload);
      }
      setForm(emptyProject);
      setEditingId(null);
      await loadProjects();
      setStatus('Project saved.');
    } catch {
      setStatus('Project could not be saved.');
    }
  };

  const handleUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const data = new FormData();
    data.append('image', file);
    setStatus('Uploading image...');

    try {
      const response = await api.post('/upload', data, { headers: { 'Content-Type': 'multipart/form-data' } });
      setForm((current) => ({ ...current, image: response.data.imageUrl }));
      setStatus('Image uploaded.');
    } catch {
      setStatus('Image upload failed.');
    }
  };

  const editProject = (project) => {
    setEditingId(project._id);
    setForm({
      title: project.title || '',
      description: project.description || '',
      image: project.image || '',
      githubLink: project.githubLink || '',
      liveLink: project.liveLink || '',
      technologies: (project.technologies || []).join(', '),
      featured: Boolean(project.featured),
    });
  };

  const deleteProject = async (id) => {
    await api.delete(`/projects/${id}`);
    await loadProjects();
  };

  const logout = () => {
    localStorage.removeItem('portfolioToken');
    navigate('/admin/login');
  };

  return (
    <main className="min-h-screen bg-[#030712] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-300">Admin</p>
            <h1 className="mt-2 text-4xl font-semibold">Portfolio Dashboard</h1>
          </div>
          <button type="button" onClick={logout} className="inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/8 px-5 py-3 text-sm font-semibold">
            <FaSignOutAlt />
            Logout
          </button>
        </div>

        <div className="mb-8 grid gap-5 md:grid-cols-3">
          {analytics.map((card) => (
            <div key={card.label} className="glass-panel p-6">
              <p className="text-sm text-slate-400">{card.label}</p>
              <p className="mt-2 text-3xl font-semibold">{card.value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <form onSubmit={handleSubmit} className="glass-panel p-6">
            <h2 className="mb-6 text-2xl font-semibold">{editingId ? 'Edit Project' : 'Add Project'}</h2>
            <div className="grid gap-4">
              {[
                ['title', 'Title'],
                ['image', 'Image URL'],
                ['githubLink', 'GitHub Link'],
                ['liveLink', 'Live Link'],
                ['technologies', 'Technologies, comma separated'],
              ].map(([name, label]) => (
                <label key={name} className="space-y-2">
                  <span className="text-sm text-slate-200">{label}</span>
                  <input
                    value={form[name]}
                    onChange={(event) => setForm((current) => ({ ...current, [name]: event.target.value }))}
                    className="form-field"
                    required={name !== 'image'}
                  />
                </label>
              ))}

              <label className="space-y-2">
                <span className="text-sm text-slate-200">Description</span>
                <textarea
                  value={form.description}
                  onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))}
                  className="form-field resize-none"
                  rows="5"
                  required
                />
              </label>

              <label className="flex items-center gap-3 text-sm text-slate-200">
                <input
                  type="checkbox"
                  checked={form.featured}
                  onChange={(event) => setForm((current) => ({ ...current, featured: event.target.checked }))}
                  className="size-4 accent-violet-400"
                />
                Featured project
              </label>

              <label className="flex cursor-pointer items-center justify-center gap-3 rounded-2xl border border-dashed border-white/20 bg-white/6 px-4 py-4 text-sm text-slate-200 transition hover:bg-white/10">
                <FaUpload />
                Upload project image
                <input type="file" accept="image/png,image/jpeg,image/webp" onChange={handleUpload} className="hidden" />
              </label>

              <button type="submit" className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950">
                <FaPlus />
                {editingId ? 'Update Project' : 'Add Project'}
              </button>
              {status && <p className="text-sm text-slate-300">{status}</p>}
            </div>
          </form>

          <div className="space-y-4">
            {projects.map((project) => (
              <article key={project._id} className="glass-panel flex flex-col gap-4 p-5 md:flex-row">
                <img src={project.image} alt={project.title} className="h-32 w-full rounded-2xl object-cover md:w-44" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-400">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {(project.technologies || []).map((tech) => (
                      <span key={tech} className="rounded-full bg-white/8 px-3 py-1 text-xs text-slate-300">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 md:flex-col">
                  <button type="button" onClick={() => editProject(project)} className="grid size-10 place-items-center rounded-full bg-white/10 text-white" aria-label="Edit project">
                    <FaEdit />
                  </button>
                  <button type="button" onClick={() => deleteProject(project._id)} className="grid size-10 place-items-center rounded-full bg-rose-500/15 text-rose-200" aria-label="Delete project">
                    <FaTrash />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default AdminDashboard;
