import React, { useState } from 'react';
import fruitsData from '../data/fruits.json';
import vegetablesData from '../data/vegetables.json';
import groceryData from '../data/grocery.json';
import './styles.css';

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  // Function to handle category selection
  const showProducts = (category) => {
    setSelectedCategory(category);
    if (category === 'fruits') {
      setProducts(fruitsData);
    } else if (category === 'vegetables') {
      setProducts(vegetablesData);
    } else if (category === 'grocery') {
      setProducts(groceryData);
    }
  };

  return (
    <div className="product-list-container">
      <h2>Products</h2>

      {/* Category Section */}
      <div className="categories">
        <button onClick={() => showProducts('fruits')}>Fruits</button>
        <button onClick={() => showProducts('vegetables')}>Vegetables</button>
        <button onClick={() => showProducts('grocery')}>Grocery</button>
      </div>

      {/* Display Products */}
      {selectedCategory && (
        <div className="product-list">
          <h3>{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Products</h3>
          {products.length > 0 ? (
            <div className="product-grid">
              {products.map((product, index) => (
                <div className="product-card" key={index}>
                  <img src={product.image} alt={product.name} />
                  <h4>{product.name}</h4>
                  <p>${product.price}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No products available in this category.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductList;
