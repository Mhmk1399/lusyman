import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Prodactcart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products/');
        const data = response.data;
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className="productcart-container">
      {products.map((product) => (
        <div key={product.id} className="product-card position-relative">
          <Link to={`/takmahsol/${product.id}`}>
            <div className="product-image">
              <img src={product.image_url} alt={product.title} className="img-fluid img-front" />
            </div>
            <div className="product-information">
              <h6 className="product-category">{product.category.name}</h6>
              <h6 className="product-name">{product.title}</h6>
              <p className="product-details information-text"> {truncateDescription(product.description, 50)}</p>
              <h6 className="product-price">قیمت :<br />{formatPrice(product.price)} تومان
              </h6>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Prodactcart;
