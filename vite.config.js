import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { codeInspectorPlugin } from 'code-inspector-plugin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [codeInspectorPlugin({
    bundler: "vite",
    editor: "code",
    hotKeys: ["altKey"],
    showSwitch: true
  }), svelte()],
})
