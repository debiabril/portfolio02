/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      fontFamily: {
        /* 'sans': ['ui-sans-serif', 'system-ui', ...],
        'serif': ['ui-serif', 'Georgia', ...],
        'mono': ['ui-monospace', 'SFMono-Regular', ...],
        'display': ['Oswald', ...],
        'body': ['"Open Sans"', ...], */
      },
      extend: {
      backgroundImage: {
        'herobg': "url('https://static.vecteezy.com/system/resources/previews/004/640/520/non_2x/blue-space-with-stars-with-neon-border-background-free-photo.jpg')",
        'notFound':"url('https://www.emizentech.com/blog/wp-content/uploads/sites/2/2021/09/404-page-for-your-E-commerce-store-1.png')",
        'skills':"url('https://www.xtrafondos.com/descargar.php?id=3182&resolucion=1920x1087')",
        'skillsMobile':"url('https://images.unsplash.com/photo-1541537103745-ea3429c65dc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3liZXJwdW5rJTIwMjA3N3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80')",
        'aboutme':"url('https://img.freepik.com/fotos-premium/cyberpunk-corazon-luces-neon-futurista-corazon-amor-3d-render-ilustracion_691560-7456.jpg?w=2000')",
        'project':"url('https://img3.wallspic.com/previews/0/2/1/3/6/163120/163120-cyberpunk-cyberpunk_2077-cyberpunk_2020-perdido_en_la_traduccion-obra_de_arte-x750.jpg')",
        'education':"url('https://img.freepik.com/fotos-premium/cyberpunk-industrial-abstract-future-wallpaper-concepto-futurista-pink-evening-paisaje-urbano-ilustracion-3d_743201-3182.jpg?w=2000')"
      },
      dropShadow: {
        'lightShadow': '0.5px 1px 0.5px rgba(255,255,255,10)',
        'darkShadow': '2px 2px 2px rgba(0, 0, 0, 10)'
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
} 