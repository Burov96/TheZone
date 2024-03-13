// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-once': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) 1',
      },
      width: {
        "30svw": "30 svw",
      },
      colors: {
        zeleno: "#A3EA71",
        belo: "#64C8C8",
        rozovo: "#FA64B5",
        cherno: "#408080 ",
        hkr1: "#0F3D3E",
        hkr2: "#39FF14",
        hkr3: "#FFC107",
        hkr4: "#808080",
        tr1: "#F8F0E3",
        tr2: "#005662",
        tr3: "#CC5500",
        tr4: "#D9D9D9",
      },
    },
  },
  variants: {
    extend: {
      animation: ['click'],
    },
  },
  plugins: [],
};
