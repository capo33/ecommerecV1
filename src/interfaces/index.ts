export interface IProduct {
  id: string;
  category: string;
  description: string;
  discountPercentage: number;
  thumbnail: string;
  images: string[];
  price: number;
  title: string;
  rating: number;
  stock: number;
  brand: string;
}

// define ICategory to array of string
export interface ICategory extends Array<string> {}
