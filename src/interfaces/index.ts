export interface IProduct {
  id: string;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  rating: {
    count: number;
    rate: number;
  };
}
