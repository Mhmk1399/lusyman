import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Prodactcart from '../components/Prodactcart';

const Store = () => {
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const [categoriesResponse, colorsResponse, sizesResponse] = await Promise.all([
          axios.get('/api/categories/'),
          axios.get('/api/colors/'),
          axios.get('/api/sizes/')
        ]);
        setCategories(categoriesResponse.data);
        setColors(colorsResponse.data);
        setSizes(sizesResponse.data);
      } catch (error) {
        console.error('Error fetching filters:', error);
      }
    };

    fetchFilters();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('/api/products/', {
          params: {
            categories: selectedCategories.join(','),
            colors: selectedColors.join(','),
            sizes: selectedSizes.join(',')
          }
        });
        setProducts(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategories, selectedColors, selectedSizes]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter(id => id !== categoryId) : [...prev, categoryId]
    );
  };

  const handleColorChange = (colorId) => {
    setSelectedColors((prev) =>
      prev.includes(colorId) ? prev.filter(id => id !== colorId) : [...prev, colorId]
    );
  };

  const handleSizeChange = (sizeId) => {
    setSelectedSizes((prev) =>
      prev.includes(sizeId) ? prev.filter(id => id !== sizeId) : [...prev, sizeId]
    );
  };

  const toggleDropdown = (e) => {
    const dropdownContent = e.currentTarget.nextElementSibling;
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  };

  return (
    <div className="store-wrapper home-wrapper2 py-2 information-text" dir="rtl">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-12 mb-4">
            <div className="filter-card">
              <div className="filter-section">
                <button className="dropdown-btn" onClick={toggleDropdown}>دسته بندی ها</button>
                <div className="dropdown-container">
                  {categories.map(category => (
                    <label key={category.id}>
                      <input 
                        type="checkbox" 
                        value={category.id} 
                        onChange={() => handleCategoryChange(category.id)}
                        checked={selectedCategories.includes(category.id)}
                      />
                      {category.name}
                    </label>
                  ))}
                </div>
              </div>
              <div className="filter-section">
                <button className="dropdown-btn" onClick={toggleDropdown}>رنگ</button>
                <div className="dropdown-container">
                  {colors.map(color => (
                    <label key={color.id}>
                      <input 
                        type="checkbox" 
                        value={color.id} 
                        onChange={() => handleColorChange(color.id)}
                        checked={selectedColors.includes(color.id)}
                      />
                      <span className="color-box" style={{ backgroundColor: color.name }}></span>
                      {color.name}
                    </label>
                  ))}
                </div>
              </div>
              <div className="filter-section">
                <button className="dropdown-btn" onClick={toggleDropdown}>سایز</button>
                <div className="dropdown-container">
                  {sizes.map(size => (
                    <label key={size.id}>
                      <input 
                        type="checkbox" 
                        value={size.id} 
                        onChange={() => handleSizeChange(size.id)}
                        checked={selectedSizes.includes(size.id)}
                      />
                      {size.name}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-8 col-12">
            <div className="product-grid">
              {error && <p>Error: {error.message}</p>}
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <>
                  {!error && products.length > 0 && <Prodactcart products={products} />}
                  {!error && products.length === 0 && <p>No products found.</p>}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
