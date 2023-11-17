import { SuLogo } from '../atoms/SuLogo';

export const Header = () => {
  return (
    <header className="relative z-50 ">
      <nav className="container mx-auto px-4 md:px-6 xl:px-8 py-8 flex justify-between">
        <a href="/" className="flex gap-4 uppercase font-bold tracking-wider items-center">
          <SuLogo className="h-8" />
          <span>Studentská unie UTB</span>
        </a>
        <div className="flex items-center gap-5 font-medium text-slate-700 text-lg tracking-wide">
          <a className="px-2 py-1 -my-1" href="/o-nas">
            O nás
          </a>
          <a className="px-2 py-1 -my-1" href="/pridej-se-k-nam">
            Přidej se k nám
          </a>
          <a
            href="/kontakt"
            className="py-2.5 px-6 rounded-lg -my-2.5 bg-primary-600 text-white shadow-lg shadow-primary-600/20 hover:bg-primary-500"
          >
            Kontakt
          </a>
        </div>
      </nav>
    </header>
  );
};
