/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '712px': '712px',
      },
      width: {
        '350px': '350px',
      },
      borderRadius: {
        '60px': '60px',
      },
      borderWidth: {
        '14px': '14px',
      },
      ringWidth: {
        '4px': '4px',
      },
      ringColor: {
        'purple-a78bfa': '#a78bfa',
      },
      boxShadow: {
        'xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}

// module.exports = {
//   theme: {
//     height: {
//       '712': '712px',
//     },
//     extend: {
//       borderRadius: {
//         '60': '60px',
//       },
//       borderWidth: {
//         '14': '14px',
//       },
//       ringWidth: {
//         '4': '4px',
//       },
//       ringColor: {
//         'purple-400': '#a78bfa',
//       },
//       boxShadow: {
//         'xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
//       },
//     },
//   },
//   variants: {},
//   plugins: [],
// }