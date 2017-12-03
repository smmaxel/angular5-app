import { Review } from './models/review.interface';
import { Product } from './models/product.interface';

const hardcodedReviews: Review[] = [
  {
    mainHeading: 'Not that satisfied',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    wasHelpfull: 5,
    notHelpfull: 8,
    qualityRate: 3,
    designRate: 4,
    comfortRate: 3,
    studirnes: 2
  },
  {
    mainHeading: 'Great product and value',
    description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    wasHelpfull: 5,
    notHelpfull: 8,
    qualityRate: 4,
    designRate: 2,
    comfortRate: 3,
    studirnes: 2
  },
  {
    mainHeading: 'Good, but could be better',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    wasHelpfull: 5,
    notHelpfull: 8,
    qualityRate: 4,
    designRate: 5,
    comfortRate: 3,
    studirnes: 2
  },
  {
    mainHeading: 'Awesome',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    wasHelpfull: 18,
    notHelpfull: 2,
    qualityRate: 5,
    designRate: 5,
    comfortRate: 4,
    studirnes: 5
  }
];

const hardcodedImages: string[] = [
  './../../assets/pic1.jpg',
  './../../assets/pic2.jpg',
  './../../assets/pic3.jpg',
  './../../assets/pic4.jpg',
  './../../assets/pic5.jpg'
];

const defaultColors = ['Black', 'Red', 'Gray'];
const defaultMaterials = ['Cedar', 'Cherry', 'Chestnut', 'Elm', 'Mahogany'];
const loremIpsumFull = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";


const dummyProducts: Product[] = [
  {
    id: 1,
    name: "Ottoman",
    price: 59,
    shortDiscription: "Ottoman Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    description: loremIpsumFull,
    rating: 4,
    coverImg: "./../../assets/pic1.jpg",
    colors: defaultColors,
    materials: defaultMaterials,
    reviews: hardcodedReviews,
    images: hardcodedImages
  },
  {
    id: 2,
    name: "Soffa",
    price: 78,
    shortDiscription: "Soffa psum is simply dummy text of the printing",
    description: loremIpsumFull,
    rating: 3,
    coverImg: "./../../assets/pic2.jpg",
    colors: defaultColors,
    materials: defaultMaterials,
    reviews: hardcodedReviews,
    images: hardcodedImages
  },
  {
    id: 3,
    name: "Armchair",
    price: 42,
    shortDiscription: "Armchair Lorem Ipsum is simply dummy text",
    description: loremIpsumFull,
    rating: 5,
    coverImg: "./../../assets/pic3.jpg",
    colors: defaultColors,
    materials: defaultMaterials,
    reviews: hardcodedReviews,
    images: hardcodedImages
  },
  {
    id: 4,
    name: "Standing Shelf",
    price: 115,
    shortDiscription: "Standing Shelf dummy text of the printing and typesetting industry",
    description: loremIpsumFull,
    rating: 2,
    coverImg: "./../../assets/pic4.jpg",
    colors: defaultColors,
    materials: defaultMaterials,
    reviews: hardcodedReviews,
    images: hardcodedImages
  },
  {
    id: 5,
    name: "Tall Armchair",
    price: 167,
    shortDiscription: "Tall Armchair Lorem Ipsum is simply dummy text of the printing and typesetting",
    description: loremIpsumFull,
    rating: 1,
    coverImg: "./../../assets/pic5.jpg",
    colors: defaultColors,
    materials: defaultMaterials,
    reviews: hardcodedReviews,
    images: hardcodedImages
  },
  {
    id: 6,
    name: "Double Seat",
    price: 204,
    shortDiscription: "Double Seat is simply dummy text of the printing",
    description: loremIpsumFull,
    rating: 2,
    coverImg: "./../../assets/pic6.jpg",
    colors: defaultColors,
    materials: defaultMaterials,
    reviews: hardcodedReviews,
    images: hardcodedImages
  },
  {
    id: 7,
    name: "Franch Bed",
    price: 400,
    shortDiscription: "Lorem Ipsum is simply dummy text of the printing",
    description: loremIpsumFull,
    rating: 5,
    coverImg: "./../../assets/pic7.jpg",
    colors: defaultColors,
    materials: defaultMaterials,
    reviews: hardcodedReviews,
    images: hardcodedImages
  },
  {
    id: 8,
    name: "Weading Bed",
    price: 350,
    shortDiscription: "It has survived not only five centuries, but also the leap",
    description: loremIpsumFull,
    rating: 4,
    coverImg: "./../../assets/pic8.jpg",
    colors: defaultColors,
    materials: defaultMaterials,
    reviews: hardcodedReviews,
    images: hardcodedImages
  },
  {
    id: 9,
    name: "Standing Ottoman",
    price: 44,
    shortDiscription: "Lorem Ipsum is simply dummy text of the printing",
    description: loremIpsumFull,
    rating: 3,
    coverImg: "./../../assets/pic9.jpg",
    colors: defaultColors,
    materials: defaultMaterials,
    reviews: hardcodedReviews,
    images: hardcodedImages
  },
  {
    id: 10,
    name: "Bedroom Armchair",
    price: 82,
    shortDiscription: "Simply dummy text of the printing",
    description: loremIpsumFull,
    rating: 4,
    coverImg: "./../../assets/pic10.jpg",
    colors: defaultColors,
    materials: defaultMaterials,
    reviews: hardcodedReviews,
    images: hardcodedImages
  },
  {
    id: 11,
    name: "Dining Chair",
    price: 38,
    shortDiscription: "Into electronic typesetting, remaining essentially unchanged.",
    description: loremIpsumFull,
    rating: 2,
    coverImg: "./../../assets/pic11.jpg",
    colors: defaultColors,
    materials: defaultMaterials,
    reviews: hardcodedReviews,
    images: hardcodedImages
  }
];

export class DummyDataService {

  products = dummyProducts;

  constructor() { }

  getProducts(): any {
    return this.products;
  }

  getProductById(id: number): Product {
    return this.products[id] || null;
  }

}
