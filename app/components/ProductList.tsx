import React, { useState } from 'react';
import { Product } from '~/services/productService';
import { Link } from '@remix-run/react';

interface VerticalProductListProps {
  products: Product[];
}

const itemsPerPage = 6;

const ProductList: React.FC<VerticalProductListProps> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const currentProducts = products.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <div className="product-list">
      <div className="products">
        {currentProducts.map((product) => (
          <Link to={`/product/${product.code}`} key={product.code} className="product-item">
            <div className='img'>
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

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} className={index === currentPage ? 'active' : ''} onClick={() => handlePageChange(index)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
