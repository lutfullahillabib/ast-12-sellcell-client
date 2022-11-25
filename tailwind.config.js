/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  daisyui: {
    themes: [
      {
        ast_12_sellcell: {

          primary: '#0FCFEC',

          secondary: '#19D3AE',

          accent: '#000',
          // accent: '#3A4256',

          neutral: "#3D4451",

          "base-100": "#FFFFFF",
          // "base-100": "#FFFFFF",

          "info": "#570DF8",

          "success": "#37CDBE",

          "warning": "#FBBD23",

          "error": "#dc2626",
        },

        // mytheme: {

        //   "primary": "#570DF8",

        //   "secondary": "#F000B8",

        //   "accent": "#37CDBE",

        //   "neutral": "#3D4451",

        //   "base-100": "#FFFFFF",

        //   "info": "#3ABFF8",

        //   "success": "#36D399",

        //   "warning": "#FBBD23",

        //   "error": "#F87272",
        // },


      },
    ],
  },

  theme: {
    extend: {},
  },

  plugins: [require("daisyui")],
}

