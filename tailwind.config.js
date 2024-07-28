/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      xs: '0px',    // Optional: Tailwind does not have an xs by default
      sm: '600px',  // Matches MUI's sm breakpoint
      md: '900px',  // Matches MUI's md breakpoint
      lg: '1200px', // Matches MUI's lg breakpoint
      xl: '1536px', // Matches MUI's xl breakpoint
    },
    extend: {
       backgroundSize: {
          'size-200': '200% 200%',
      },
      backgroundPosition: {
          'pos-0': '0% 0%',
          'pos-100': '100% 100%',
      },
       size: {
        '6/5': '120%',
      },
    },
  },
  plugins: [],
}

