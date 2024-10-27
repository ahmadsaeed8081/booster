/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'zen-dots': ['"Zen Dots"', 'cursive'],
        'poppins': ['"Poppins"', 'sans-serif'],
      },
      backgroundImage:{
        Hero:"url('assets/images/global-business.png')",
        Team_bg:"url('assets/images/team_bg.png')",
        register_bg:"url('assets/images/register_left.png')",
        Mesh:"url('assets/images/mesh-testimonials-blockchain.png')",
        Token:"url('assets/images/tokens_b.png')",
        Road:"url('assets/images/road.png')",
        Banner:"url('assets/images/bg-banner.png')",
        Hero_bg:"url('assets/images/hero_right_image.png')",
        'button-gradient': 'linear-gradient(90deg,  #F9F8A5  0%, #DDA80E 100%)',
        'button-level':'linear-gradient(180deg, #1E1E1E 0%, #00000000 50%, #F3E78533 100%)',
        'gradient': 'linear-gradient(90.37deg, rgba(255, 255, 255, 0.52) 10.97%, rgba(243, 243, 243, 0.29) 100%)'
        
      
      },
      borderImageSource: {
        'gradient': 'linear-gradient(86.91deg, #F9F8A5 8.72%, #DDA80E 94.71%)',
      },
      borderWidth: {
        'custom': '2.14px',
      },
    },
  },
  plugins: [],
}

