import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/AAJ_SUPPLY_ASSIGNMENT/"   // 👈 your repo name
})