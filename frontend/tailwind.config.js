/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: "'Comic Neue', cursive;"
    },
    extend: {
      boxShadow: {
        base: "0 0 15px 6px rgba(0, 0, 0, 0.3)",

        base_r: "6px 0 15px 6px rgba(0, 0, 0, 0.3)",
        base_ir: "inset 10px 0 15px -10px rgba(0,0,0,0.5)",
        base_ir_r:
          "6px 0 15px 6px rgba(0, 0, 0, 0.3), inset 10px 0 15px -10px rgba(0,0,0,0.5)",

        base_l: "-6px 0 15px 6px rgba(0, 0, 0, 0.3)",
        base_il: "inset -10px 0 15px -10px rgba(0,0,0,0.5)",
        base_il_l:
          "-6px 0 15px 6px rgba(0, 0, 0, 0.3), inset -10px 0 15px -10px rgba(0,0,0,0.5)",

        button_r: "14px 0 15px 0px rgba(0, 0, 0, 0.3)",
        button_ir: "inset 10px 0 10px 1px rgba(0,0,0,0.3)",
        button_ir_r:
          "8px 0 15px 4px rgba(0, 0, 0, 0.3), inset 10px 0 10px 1px rgba(0,0,0,0.3)",
      },
      backgroundColor: {
        main: "#2b2d31",
        book: "#313338",
        button: "#464951",
        green: "#50dd60",
        dGreen: "#3a9d46",
      },
    },
  },
  plugins: [],
};
