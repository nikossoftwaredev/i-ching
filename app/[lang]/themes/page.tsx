'use client';

import Link from 'next/link';

const ALL_THEMES = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter'
];

const Theme = ({ theme }: { theme: string }) => {
  return (
    <div data-theme={theme} className='card p-4 rounded-xl base-100'>
      Background 1
      <div className='card p-4 rounded-xl base-200'>
        Background 2
        <div className='card p-4 rounded-xl base-300'>
          Background 3<p className='text-center font-bold text-primary uppercase'> {theme}</p>
          <button
            className='btn btn-primary'
            onClick={() => {
              document.documentElement.setAttribute('data-theme', theme);

              localStorage.setItem('theme', theme);
            }}
          >
            Activate
          </button>
          <Link href='/themes' className={`font-bold hover:text-accent`}>
            LINK
          </Link>
        </div>
      </div>
    </div>
  );
};

const Themes = () => {
  return (
    <main className='grid md:grid-cols-4 gap-4 sm:grid-cols-1 p-2'>
      {ALL_THEMES.map(theme => (
        <Theme key={theme} theme={theme} />
      ))}
    </main>
  );
};

export default Themes;
