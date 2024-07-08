import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'diploma_railway-ticket-booking-system',
  resolve: {
    alias: {
      components: '/src/components',
      assets: '/src/assets',
      types: '/src/types',
      pages: '/src/pages',
      hooks: '/src/hooks',
      state: '/src/state',
      views: '/src/views',
      funcs: '/src/funcs',
    },
  },
});
