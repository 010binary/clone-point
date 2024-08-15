import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    viteTsconfigPaths(),
    {
      name: 'suppress-ts-errors',
      transform(src, id) {
        if (id.endsWith('.ts') || id.endsWith('.tsx')) {
          return {
            code: '/* @ts-nocheck */\n' + src,
            map: null,
          };
        }
        return null;
      },
    }
  ],
})
