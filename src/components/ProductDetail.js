import React from 'react';
import { useParams } from 'react-router-dom';
import fruitsData from '../data/fruits.json';
import vegetablesData from '../data/vegetables.json';
import groceryData from '../data/grocery.json';
import './styles.css';

const ProductDetail = () => {
  const { id } = useParams();
  
  const allProducts = [...fruitsData, ...vegetablesData, ...groceryData];
  const product = allProducts[id];

  return (
    <div className="product-detail-container">
      {product ? (
        <div className="product-detail">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p className="price">${product.price}</p>
          <button>Add to Cart</button>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ProductDetail;
