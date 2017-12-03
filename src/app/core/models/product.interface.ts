import { Review } from './review.interface';

export interface Product {
  id: number,
  name: string,
  price: number,
  shortDiscription: string,
  description: string,
  rating: number,
  coverImg: string,
  colors: string[],
  materials: string[],
  reviews: Review[],
  images: string[]
}
