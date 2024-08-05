
import React, { useState } from 'react';
import { Link } from '@remix-run/react';
import { Product } from '~/services/productService';

interface SliderProbs {
  products: Product[];
}


const HorizontalProductList: React.FC<SliderProbs> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };


  return (
    <div className="slider">
      <button onClick={handlePrev} className="slider-button prev">
        &#10094;
      </button>

      <div className="slider-content">
        {products.map((product, index) => (
          <Link to={`/product/${product.code}`} key={product.code}
            className={`product-item ${index === currentIndex ? 'active' : ''}`}
            style={{ display: index === currentIndex ? 'flex' : 'none' }}
          >
            <div className="img">
              <img src={product.imageUrl} alt={product.name} />
              <div className="drop">%{product.dropRatio}</div>
            </div>
            <div className="info">
              <h3>{product.name}</h3>
              <h1>{new Intl.NumberFormat('tr-TR').format(product.price)} <span> TL</span></h1>
              <p>{product.countOfPrices} satıcı &#10095;</p>
              <p>{product.followCount} takip</p>
            </div>
          </Link>
        ))}
      </div>

      <button onClick={handleNext} className="slider-button next">
        &#10095;
      </button>

      <div className="slider-dots">
        {products.map((_, index) => (
          <span
            key={index}
            className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );


};

export default HorizontalProductList;

