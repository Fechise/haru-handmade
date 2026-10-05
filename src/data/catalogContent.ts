const WORKING_IMAGE_URL = "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800";
const DUMMY_DESCRIPTION = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export type CategoryType = 'cosmetiqueras' | 'monederos' | 'estuches';

export interface Product {
  id: string;
  title: string;
  imageUrl: string;
  images?: string[];
  quote: string;
  description: string;
  price: number;
  category: CategoryType;
  available: boolean;
}

export const catalogContent: Product[] = [
  {
    id: "prod-1",
    title: "Cosmetiquera Floral",
    imageUrl: WORKING_IMAGE_URL,
    images: [
      WORKING_IMAGE_URL, 
      "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=800", 
      "https://images.unsplash.com/photo-1590845947698-8924d7409b56?auto=format&fit=crop&q=80&w=800"
    ],
    quote: "“Lleva la primavera contigo a donde vayas”",
    description: DUMMY_DESCRIPTION,
    price: 15,
    category: 'cosmetiqueras',
    available: true
  },
  {
    id: "prod-2",
    title: "Monedero Minimalista",
    imageUrl: WORKING_IMAGE_URL,
    images: [
      WORKING_IMAGE_URL,
      "https://images.unsplash.com/photo-1590845947698-8924d7409b56?auto=format&fit=crop&q=80&w=800"
    ],
    quote: "“Menos es más, ideal para tu día a día”",
    description: DUMMY_DESCRIPTION,
    price: 8,
    category: 'monederos',
    available: true
  },
  {
    id: "prod-3",
    title: "Estuche Geométrico",
    imageUrl: WORKING_IMAGE_URL,
    quote: "“Organiza tus herramientas con el mejor estilo”",
    description: DUMMY_DESCRIPTION,
    price: 12,
    category: 'estuches',
    available: false
  },
  {
    id: "prod-4",
    title: "Cosmetiquera de Viaje",
    imageUrl: WORKING_IMAGE_URL,
    quote: "“Tu compañera perfecta para la próxima aventura”",
    description: DUMMY_DESCRIPTION,
    price: 20,
    category: 'cosmetiqueras',
    available: true
  },
  {
    id: "prod-5",
    title: "Monedero Clásico",
    imageUrl: WORKING_IMAGE_URL,
    quote: "“Elegancia artesanal que nunca pasa de moda”",
    description: DUMMY_DESCRIPTION,
    price: 10,
    category: 'monederos',
    available: false
  },
  {
    id: "prod-6",
    title: "Estuche Escolar",
    imageUrl: WORKING_IMAGE_URL,
    quote: "“Estudia y crea rodeado de colores cálidos”",
    description: DUMMY_DESCRIPTION,
    price: 9,
    category: 'estuches',
    available: true
  },
  {
    id: "prod-7",
    title: "Monedero de Bolsillo",
    imageUrl: WORKING_IMAGE_URL,
    quote: "“Pequeño, práctico y con mucho encanto”",
    description: DUMMY_DESCRIPTION,
    price: 6,
    category: 'monederos',
    available: true
  }
];
