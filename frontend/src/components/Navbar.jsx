import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navItems } from '../data/portfolio';
import ThemeToggle from './ThemeToggle';

function Navbar({ theme, onThemeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const current = navItems
        .map((item) => item.href.slice(1))
        .findLast((id) => {
          const element = document.getElementById(id);
          return element && element.getBoundingClientRect().top <= 160;
        });
      if (current) {
        setActive(current);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#030712]/75 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button type="button" onClick={() => handleClick('#home')} className="flex items-center gap-3 text-left">
          <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 text-sm font-bold text-white shadow-lg shadow-violet-950/40">
            RV
          </span>
          <span>
            <span className="block text-sm font-semibold text-white">Rathi Varshini R</span>
            <span className="block text-xs text-slate-400">Full Stack Developer</span>
          </span>
        </button>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/6 p-1.5 shadow-2xl shadow-black/20 backdrop-blur md:flex">
          {navItems.map((item) => {
            const id = item.href.slice(1);
            return (
              <button
                type="button"
                key={item.href}
                onClick={() => handleClick(item.href)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  active === id ? 'bg-white text-slate-950 shadow-lg' : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/8 text-white md:hidden"
            aria-label="Open menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl shadow-black/30 backdrop-blur md:hidden">
          {navItems.map((item) => (
            <button
              type="button"
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="block w-full rounded-xl px-4 py-3 text-left text-sm text-slate-200 hover:bg-white/10"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
