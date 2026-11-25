import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Cambia `site` (y `base` si publicas en un subdirectorio de GitHub Pages).
  // site: 'https://tu-usuario.github.io',
  // base: '/ai-academy-landing',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always', // CSS crítico en línea: mejor LCP en móvil
  },
});
