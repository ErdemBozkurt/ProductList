import React, { useState, useEffect } from 'react';
import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { useParams } from '@remix-run/react';
import { getProductDetail, ProductDetail } from '~/services/productService';
import styles from '~/styles/ProductDetail.css?url';
import StarRating from '~/components/StarRating';
import StarRatingStyles from '~/styles/StarRating.css?url';

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: StarRatingStyles },
];

const ProductDetailPage: React.FC = () => {
  const { Id } = useParams<{ Id: string }>();
  const [productDetail, setProductDetail] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedStorage, setSelectedStorage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        if (Id) {
          const url = `https://mock.akakce.dev/product${Id}.json`;
          const data = await getProductDetail(url);
          setProductDetail(data);
          setLoading(false);
        }
      } catch (err) {
        setError('Ürün detayı yüklenirken bir hata oluştu.');
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [Id]);

  const handleStorageSelect = (option: string) => {
    setSelectedStorage(option);
  };

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!productDetail) {
    return <div>Ürün detayları mevcut değil.</div>;
  }

  const {
    mkName,
    productName,
    badge,
    rating,
    imageUrl,
    storageOptions,
    countOfPrices,
    price,
    freeShipping,
    lastUpdate,
  } = productDetail;

  return (
    <div className='container'>
      <div className="product-detail">
        <div className='heading'>
          <h2>{mkName}</h2>
          <h1>{productName}</h1>
          <p>{badge}</p>
          <StarRating rating={rating} />
        </div>
        <div className="img">
          <img src={imageUrl} alt={productName} />
        </div>
        <div className='options'>
          <h4>Kapasite seçenekleri:</h4>
          {storageOptions.map((option) => (
          <button
            key={option}
            className={`storage-option ${option === selectedStorage ? 'selected' : ''}`}
            onClick={() => handleStorageSelect(option)}
          >
            {option}
          </button>
        ))}
        </div>
        <div className='price-info'>
          <p className='prices'>{countOfPrices} satıcı içinde {freeShipping ? 'kargo dahil' : 'kargo hariç'} en ucuz fiyat seçeneği</p>
          <p className='price'>{price} TL</p>
          <p className='cargo'>{freeShipping ? 'Ücretsiz kargo' : 'Ücretli kargo'}</p>
          <p className='update'>Son Güncelleme: {lastUpdate}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
