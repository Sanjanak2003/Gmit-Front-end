import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fruitsData from '../data/fruits.json';
import vegetablesData from '../data/vegetables.json';
import groceryData from '../data/grocery.json';
import './styles.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  const showProducts = (category) => {
    if (category === 'fruits') {
      setProducts(fruitsData);
    } else if (category === 'vegetables') {
      setProducts(vegetablesData);
    } else if (category === 'grocery') {
      setProducts(groceryData);
    }
  };

  return (
    
     

      <section className="products-section">
        
          <div className="product-list">
            {products.map((product, index) => (
              <div className="product-card" key={index}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="price">${product.price}</p>
                <Link to={`/product/${index}`}>View Details</Link>
              </div>
            ))}
          </div>
        
      </section>
   
  );
};

export default Home;
