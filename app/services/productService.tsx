export interface Product {
  code: number;
  name: string;
  imageUrl: string;
  dropRatio: number;
  price: number;
  countOfPrices: number;
  followCount: number;
  url: string;
}

interface ApiResponse {
  horizontalProductList: Product[];
  productList: Product[];
  nextUrl: string | null;
}

export async function getHorizontalProductList(): Promise<Product[]> {
  const response = await fetch('https://mock.akakce.dev/page.json');
  if (!response.ok) {
    throw new Error('Veri alınamadı.');
  }

  const data: ApiResponse = await response.json();
  return data.horizontalProductList;
}

export async function getAllProducts(url: string): Promise<Product[]> {
  let products: Product[] = [];
  let nextUrl: string | null = url;

  while (nextUrl) {
    const response = await fetch(nextUrl);
    if (!response.ok) {
      throw new Error('Veri alınamadı.');
    }

    const data: ApiResponse = await response.json();
    products = [...products, ...data.productList];
    nextUrl = data.nextUrl;
  }

  return products;
}

export interface ProductDetail {
  mkName: string;
  productName: string;
  badge: string;
  rating: number;
  imageUrl: string;
  storageOptions: string[];
  countOfPrices: number;
  price: number;
  freeShipping: boolean;
  lastUpdate: string;
}

export async function getProductDetail(url: string): Promise<ProductDetail> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Ürün detayı alınamadı.');
  }
  const data: ProductDetail = await response.json();
  return data;
}