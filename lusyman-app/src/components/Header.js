import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";

const Header = () => {
  const [headerImages, setHeaderImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('/api/header-image-list/'); // Replace with your API endpoint
        const data = response.data;
        setHeaderImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header-lower py-3">
        <div className="container-xxl">
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-6 d-flex align-items-center">
              <h2 className="text-dark px-4 english-fonts">lusyman</h2>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <button className="menu-button" onClick={toggleMenu}>
                ☰
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="menu-links information-text d-flex flex-column align-items-center">
              <Link className="p-3 text-black" to="/">خانه</Link>
              <Link className="p-3 text-black" to="/store">فروشگاه</Link>
              <Link className="text-center text-black m-2" to="/VipClub">لوسی من کلاب</Link>
              <Link className="text-center text-black m-2" to="/Order">پیگیری سفارشات</Link>
              <div className="rounded-button ml-3">
              <button className="btn btn-dark" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                دسته بندی محصولات
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><Link className="dropdown-item" to="/Store">شلوار و پایین تنه</Link></li>
                <li><Link className="dropdown-item" to="/Store">پیراهن و تیشرت</Link></li>
                <li><Link className="dropdown-item" to="/Store">کفش و کتونی</Link></li>
                <li><Link className="dropdown-item" to="/Store">اکسسوری</Link></li>
                <li><Link className="dropdown-item" to="/Store">کت</Link></li>
              </ul>
            </div>
            </div>
            
          )}
        </div>
      </header>

      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="rounded-button ml-3">
              <button className="btn btn-dark" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                پشتیبانی و پیگیری سفارشات
              </button>
              
            </div>
          </div>
        </div>
      </header>

      

      {selectedImage && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>&times;</span>
            <img src={selectedImage.image_url} alt={selectedImage.title} className="modal-image" />
            <div className="modal-footer">
              <a href={selectedImage.image_url} className="modal-link" target="_blank" rel="noopener noreferrer">
                {selectedImage.title}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
