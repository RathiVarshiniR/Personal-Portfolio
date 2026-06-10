import { FaMoon, FaSun } from 'react-icons/fa';

function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/8 text-slate-100 shadow-lg shadow-black/20 backdrop-blur transition hover:border-violet-300/50 hover:text-violet-100"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <FaMoon /> : <FaSun />}
    </button>
  );
}

export default ThemeToggle;
