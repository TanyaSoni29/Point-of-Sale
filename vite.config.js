/** @format */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	rules: [],
	server: {
		host: '192.168.1.39', // Replace with your desired IP address
		port: 3000, // Optional: specify the port as well
	},
});
