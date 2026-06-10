import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { navItems } from '../data/portfolio';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#030712] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">Rathi Varshini R</p>
          <p className="mt-2 text-sm text-slate-400">Full Stack Developer | AI & ML Student</p>
          <p className="mt-3 text-sm text-slate-500">Copyright {year}. All rights reserved.</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/8 hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex gap-3">
          {[
            { icon: FaGithub, href: 'https://github.com/', label: 'GitHub' },
            { icon: FaLinkedin, href: 'https://www.linkedin.com/', label: 'LinkedIn' },
            { icon: FaPaperPlane, href: 'mailto:rathivarshini@example.com', label: 'Email' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/6 text-slate-200 transition hover:bg-white/12"
                aria-label={item.label}
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
