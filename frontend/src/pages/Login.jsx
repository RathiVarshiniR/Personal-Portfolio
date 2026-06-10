import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaSignInAlt } from 'react-icons/fa';
import api from '../lib/api';

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Signing in...' });

    try {
      const { data } = await api.post('/auth/login', form);
      localStorage.setItem('portfolioToken', data.token);
      navigate('/admin');
    } catch {
      setStatus({ type: 'error', message: 'Invalid login credentials.' });
    }
  };

  return (
    <main className="grid min-h-screen place-items-center bg-[#030712] px-4 py-12 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.26),transparent_34%),linear-gradient(180deg,#030712,#070b16)]" />
      <form onSubmit={handleSubmit} className="glass-panel relative w-full max-w-md p-8">
        <div className="mb-8 grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white">
          <FaLock />
        </div>
        <h1 className="text-3xl font-semibold">Admin Login</h1>
        <p className="mt-3 text-slate-400">Manage projects, images, and dashboard analytics.</p>

        <label className="mt-8 block space-y-2">
          <span className="text-sm text-slate-200">Email</span>
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            className="form-field"
            required
          />
        </label>

        <label className="mt-5 block space-y-2">
          <span className="text-sm text-slate-200">Password</span>
          <input
            type="password"
            value={form.password}
            onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
            className="form-field"
            required
          />
        </label>

        <button
          type="submit"
          disabled={status.type === 'loading'}
          className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 disabled:opacity-70"
        >
          <FaSignInAlt />
          {status.type === 'loading' ? 'Signing in' : 'Login'}
        </button>

        {status.message && <p className="mt-4 text-sm text-rose-300">{status.message}</p>}
      </form>
    </main>
  );
}

export default Login;
