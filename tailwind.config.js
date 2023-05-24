/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',],// 摇树优化，移除生产环境下没有使用到的样式声明
  theme: {
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
      },
      darkMode: 'class',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

