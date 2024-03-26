import React from 'react';
import Product from './Product';
import productsData from '../data/products.json';

const ProductList = () => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {productsData.products.map(product => (
            <div className="col" key={product.id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      );
};

export default ProductList;
