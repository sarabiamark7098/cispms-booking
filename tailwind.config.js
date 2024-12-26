import daisyui from 'daisyui';
import forms from '@tailwindcss/forms';
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx,vue}', './public/**/*.html'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [daisyui, forms],
}
