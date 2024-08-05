import React, { useEffect, useState } from "react";
import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { getHorizontalProductList, getAllProducts, Product } from "~/services/productService";
import HorizontalProductList from "~/components/HorizontalProductList";
import VerticalProductList from "~/components/ProductList";
import styles from '~/styles/ProductList.css?url';

export const meta: MetaFunction = () => {
  return [
    { title: "Akıllı Telefonlar" },
    { name: "description", content: "En ucuz cep telefonu fiyatları 3041 farklı seçenekle..." },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles }
];

export default function Index() {
  const [horizontalProducts, setHorizontalProducts] = useState<Product[]>([]);
  const [verticalProducts, setVerticalProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const [horizontal, vertical] = await Promise.all([
          getHorizontalProductList(),
          getAllProducts("https://mock.akakce.dev/page.json"),
        ]);

        setHorizontalProducts(horizontal);
        setVerticalProducts(vertical);
        setLoading(false);
      } catch (err) {
        setError('Ürünler yüklenirken bir hata oluştu.');
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='container'>
      <HorizontalProductList products={horizontalProducts} />
      <VerticalProductList products={verticalProducts} />
    </div>
  );
}

