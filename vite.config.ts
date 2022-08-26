import { defineConfig } from 'vite';
import * as path from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build:{
    lib:{
      entry:path.resolve(__dirname,'./packages/components/index.ts'),
      name:"bark-ui",
    },
    rollupOptions:{
      external:["vue"],
      output:{
        globals:{
          vue:"Vue",
        },
      },
    },
  },
  css:{
    preprocessorOptions:{
      less:{
        additionalData:`@import "@/styles/style.less";`,
      },
    },
  },
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"packages"),
    },
  },
})