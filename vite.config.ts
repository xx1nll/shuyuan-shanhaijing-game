import { defineConfig } from "vite";

export default defineConfig({
  base: "/shuyuan-shanhaijing-game/",
  server: {
    port: 5173,
    host: true,
  },
  assetsInclude: ["**/*.hdr", "**/*.glb", "**/*.gltf", "**/*.bin"],
});
