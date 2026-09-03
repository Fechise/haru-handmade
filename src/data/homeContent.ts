import cosmetiquerasImg from '../assets/Cosmetiqueras.png';

export const homeContent = {
  hero: {
    title: "Hecho a mano, con amor para ti.",
    paragraph1: "En Haru Handmade, cada pieza es única. Creemos en el valor de lo artesanal y en crear accesorios que no solo sean hermosos, sino también funcionales y duraderos.",
    paragraph2: "Descubre nuestra colección de cosmetiqueras, monederos y estuches diseñados para acompañarte en tu día a día con estilo.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Cosmetiquera floral Haru Handmade"
  },
  categories: [
    {
      id: "cat-1",
      title: "Cosmetiqueras",
      imageUrl: cosmetiquerasImg,
      to: "/catalog"
    },
    {
      id: "cat-2",
      title: "Monederos",
      imageUrl: cosmetiquerasImg,
      to: "/catalog"
    },
    {
      id: "cat-3",
      title: "Estuches",
      imageUrl: cosmetiquerasImg,
      to: "/catalog"
    }
  ]
};
