import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SizeChartModal from '../components/SizeChartModal';

const Takmahsol = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [sizes, setSizes] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [showSizeChart, setShowSizeChart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}/`);
        setProduct(response.data);
        // Select the first image initially
        if (response.data.images.length > 0) {
          setSelectedImage(response.data.images[0].image);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    const fetchSizes = async () => {
      try {
        const response = await axios.get('/api/sizes/');
        setSizes(response.data);
      } catch (error) {
        console.error('Error fetching sizes:', error);
      }
    };

    fetchProduct();
    fetchSizes();
  }, [id]);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const toggleSizeChart = () => {
    setShowSizeChart(!showSizeChart);
  };

  if (!product) {
    return <div className="loading-container">Loading...</div>;
  }

  return (
    <div className="takmahsol-container" dir='rtl'>
      <main className="product-details-container">
        <div className="product-image-container">
          {/* Main large image */}
          <img
            src={selectedImage}
            alt={product.title}
            className="product-image"
          />
          {/* Small thumbnail images */}
          <div className="thumbnail-images-container">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image.image}
                alt={`Thumbnail ${index}`}
                className={`thumbnail-image ${selectedImage === image.image ? 'selected' : ''}`}
                onClick={() => handleImageSelect(image.image)}
              />
            ))}
          </div>
        </div>
        <div className="product-info-container">
          <div className="product-info">
            <h1 className="product-title">{product.title}</h1>
            <div className="product-price">
              <span className="price-label">قیمت: </span>
              <span className="price-value">{formatPrice(product.price)} تومان</span>
            </div>
            
            <p className="product-description">{product.description}</p>

            <span className="sizing-titile">سایز های موجود</span>
            
            {/* Render sizes buttons */}
            {product.sizes && product.sizes.length > 0 ? (
              <div className="size-buttons-container">
                {product.sizes.map((size) => (
                  <button
                    key={size.id}
                    className="size-button"
                    
                  >
                    {size.name}
                  </button>
                ))}
              </div>
            ) : (
              <p className="no-sizes-message">No sizes available</p>
            )}

            <span className="sizing-titile my-3">در رنگ های</span>
            
            {/* Render color options */}
            {product.colors && product.colors.length > 0 && (
              <div className="color-options-container">
                {product.colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                    style={{ backgroundColor: color.rgb}}
                    title={color.name}
                  >
                    {color.name}
                  </button>
                ))}
              </div>
            )}

            <div className="size-guide-link-container">
              <a href="#" className="size-guide-link" onClick={toggleSizeChart}>
                راهنمای سایز
              </a>
            </div>
          </div>
          <div className="buy-button-container">
            <button className="buy-button">
              <a href={product.payment_link} target="_blank" rel="noopener noreferrer">
                خرید (پرداخت آنلاین)
              </a>
            </button>
          </div>
        </div>
      </main>
      <SizeChartModal show={showSizeChart} onClose={toggleSizeChart} product={product} sizes={sizes} />
    </div>
  );
};

export default Takmahsol;
