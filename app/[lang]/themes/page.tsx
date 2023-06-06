'use client';

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
    <div data-theme={theme} className='card p-4 rounded-xl base-300'>
      <p className='text-center font-bold text-primary uppercase'> {theme}</p>
      <button
        className='btn btn-primary'
        onClick={() => {
          document.documentElement.setAttribute('data-theme', theme);

          localStorage.setItem('theme', theme);
        }}
      >
        Activate
      </button>
    </div>
  );
};

const Themes = () => {
  return (
    <main className='grid md:grid-cols-4 gap-4 sm:grid-cols-1 m-2'>
      {ALL_THEMES.map(theme => (
        <Theme key={theme} theme={theme} />
      ))}
    </main>
  );
};

export default Themes;
