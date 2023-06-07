"use client";

import Theme from "@/app/[lang]/themes/Theme";

const ALL_THEMES = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];

const Themes = () => {
  const selectedTheme = localStorage.getItem("theme") || "garden";

  const themes = [
    selectedTheme,
    ...ALL_THEMES.filter((theme) => theme !== selectedTheme),
  ];

  return (
    <main className="max-w-screen-lg mx-auto">
      <section className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 p-2 justify-center items-center">
        {themes.map((theme) => (
          <Theme key={theme} theme={theme} />
        ))}
      </section>
    </main>
  );
};

export default Themes;
