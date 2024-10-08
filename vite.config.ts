import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: "src/lib/index.js",
			name: "react-geojson-map",
			fileName: (format) => `react-geojson-map.${format}.js`,
		},
		rollupOptions: {
			external: ["react", "react-dom", "ol", "react-reconciler"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					ol: "ol",
					"react-reconciler": "ReactReconciler",
				},
			},
		},
	},
});
