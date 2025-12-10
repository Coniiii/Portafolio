import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Coniiii.github.io', // Tu usuario de GitHub
  base: 'Portafolio',             // El nombre de tu repositorio
  
  outDir: '../docs',
  vite: {
    plugins: [tailwindcss()]
  }
});