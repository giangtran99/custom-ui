/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./dist/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      keyframes: {
        slideRight: {
          '0%': {  transform: 'translateX(-100px)', opacity: 0 },
          '10%,100%': { transform: 'translateX(0)', opacity: 1},
        },
        slideLeft: {
          '0%': {  transform: 'translateX(30px)', opacity: 0 },
          '10%,100%': { transform: 'translateX(0)', opacity: 1},
        },
        slide: {
          '0%': {  transform: 'translateX(10px)', opacity: 0 },
          '10%,100%': { transform: 'translateX(0)', opacity: 1},
        },
        progress_loading: {
          '0%': { width:'0%' },
          '100%': { width:'100%', borderRadius:"0.75rem"},
        }
      },
      animation: {
        slide: 'slide 3s cubic-bezier(0.455, 0.03, 0.515, 0.955)',
        slideLeft: 'slideLeft 3s cubic-bezier(0.455, 0.03, 0.515, 0.955)',
        slideRight: 'slideRight 3s cubic-bezier(0.455, 0.03, 0.515, 0.955)',
        progress_loading: 'progress_loading 4.0s linear'
      },
      screens:{
        'bp-1': {"max":'1137px'},
        'bp-2':{"max":'903px'},
        'bp-3':{"max":'961px'},
        'mobile':{"max":'841px'}
      },
      fontSize: {
        'tiny': '.755rem'
      },
      width: {
        inherit: 'inherit'
      },
      height: {
        inherit: 'inherit'
      },
      maxWidth: {
        '4/5': '80%',
      },
      minWidth: {
        '4/5': '80%',
      },
      fontFamily:{
        
      }
    },
  },
  plugins: [],
}
