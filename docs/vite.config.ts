import { defineConfig } from 'vite';

export default defineConfig({
  css:{
    preprocessorOptions:{
      less:{
        additionalData:`@import "../packages/styles/style.less";`,
      },
    },
  },
})