/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '4xl': { 'max': '1920px' },
      '3xl': { 'max': '1735px' },
      '2xl': { 'max': '1535px' },
      'xl': { 'max': '1279px' },
      'lg': { 'max': '1023px' },
      'md': { 'max': '767px' },
      'sm': { 'max': '639px' },
      'xs': { 'max': '530px' },
      'xxs': { 'max': '420px' }
    },
    extend: {
      backgroundColor: {
        transparent: "transparent",
        dark: {
          opacity_25: "rgba(0, 0, 0, 0.25)",
        },
        primary: {
          light: "#64B5F3",
          default: "#376FFF",
          light2: "#E2F3FF",
          dark: "#1C3475",
          dark2: "#727FA4",
          dark3: "#334883"
        },
        green: {
          default: "#55C2A3",
          light: "#DDF9EF"
        },
        red: {
          default: "#EB5757",
          light: "#FDEEEE"
        },
        grey: {
          shade1: "#F8F8F8",
          shade2: "#ECEEF1"
        },
        border: {
          shade1: "#ECEEF1",
          shade2: "#B6BBC9"
        },
      },
      colors: {
        transparent: "transparent",
        primary: {
          light: "#64B5F3",
          default: "#376FFF",
          light2: "#E2F3FF",
          dark: "#1C3475",
          dark2: "#727FA4",
          dark3: "#334883"
        },
        green: {
          default: "#55C2A3",
          light: "#DDF9EF"
        },
        red: {
          default: "#EB5757",
          light: "#FDEEEE"
        },
        grey: {
          shade1: "#F8F8F8",
          shade2: "#ECEEF1"
        },
        border: {
          shade1: "#ECEEF1",
          shade2: "#B6BBC9"
        },
        textwhite: "#D1D5DB",
        textcolor: "#4F5C80",
      },
      borderRadius: {
        0: "0px",
        4: "4px",
        8: "8px",
        16: "16px",
        24: "24px",
      },
      boxShadow: {
        Shadow1: "0px 30px 80px rgba(15, 29, 36, 0.04)",
        Shadow2: "0px 24px 48px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [
    function ({ addBase, config }) {
      addBase({
        body: {
          padding: "0",
          margin: "0",
          fontFamily: "GilmerRegular",
          boxSizing: "border-box",
        },
        html: {
          padding: "0",
          margin: "0",
          fontFamily: "GilmerRegular",
          boxSizing: "border-box",
        },
        '*': {
          boxSizing: "border-box",
          fontFamily: "GilmerRegular",
        },
        li: {
          listStyle: "none",
          margin: "0",
          padding: "0",
        },
        ul: {
          listStyle: "none",
          margin: "0",
          padding: "0",
        },
        a: {
          display: "inline",
          textDecoration: "none",
          transition: ".3s",
          '&:hover': {
            textDecoration: "none",
          },
        },
        p: {
          margin: "0",
          padding: "0",
        },
        h1: {
          margin: "0",
          padding: "0",
        },
        h2: {
          margin: "0",
          padding: "0",
        },
        h3: {
          margin: "0",
          padding: "0",
        },
        h4: {
          margin: "0",
          padding: "0",
        },
        h5: {
          margin: "0",
          padding: "0",
        },
        h6: {
          margin: "0",
          padding: "0",
        },
        input: {
          fontSize: "16px",
          lineHeight: "26px",
          fontWeight: "500",
          width: "100%",
          border: "1px solid #C6C9D1",
          color: "black",
          outline: "none",
          padding: "10px 16px",
          borderRadius: "8px",
          transition: ".3s",
          '&:focus': {
            backgroundColor: "#C6C9D1",
          },
          '&:placeholder': {
            color: "#C6C9D1",
          }
        },
        textarea: {
          fontSize: "16px",
          lineHeight: "26px",
          fontWeight: "500",
          width: "100%",
          height: "110px",
          border: "1px solid #C6C9D1",
          color: "black",
          outline: "none",
          padding: "10px 16px",
          borderRadius: "8px",
          transition: ".3s",
          resize: "none",
          '&:focus': {
            backgroundColor: "#C6C9D1",
          },
          '&:placeholder': {
            color: "#C6C9D1",
          }
        },
      });
    },
    function ({ addUtilities }) {
      const dropdownHome = {
        ".modalcomponent_main": {
          position: "fixed",
          width: "100%",
          height: "100vh",
          top: "0",
          left: "0",
          zIndex: "-10",
          opacity: "0",
          visibility: "hidden",
          transition: ".4s"
        },
        ".modalcomponent_main .modalcomponent_bg": {
          bottom: "0",
          left: "0",
          opacity: "0",
          visibility: "hidden",
          transition: ".2s"
        },
        ".modalcomponent_main .modalcomponent_content": {
          bottom: "0",
          left: "0",
          opacity: "0",
          visibility: "hidden",
          transform: "scale(0)",
          transition: ".3s"
        },
        ".modalcomponent_main_open": {
          zIndex: "999",
          opacity: "1",
          visibility: "visible"
        },
        ".modalcomponent_main_open .modalcomponent_bg": {
          opacity: "1",
          visibility: "visible",
        },
        ".modalcomponent_main_open .modalcomponent_content": {
          opacity: "1",
          visibility: "visible",
          transform: "scale(1)",
        },
        ".modalcomponent_main .modalcomponent_content": {
          height: "calc(100vh - 120px)",
          overflow: "auto",
        }
      };
      addUtilities(dropdownHome, ["responsive", "hover"]);
    },
  ],
};
