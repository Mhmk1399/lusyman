import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CiDeliveryTruck } from "react-icons/ci";
import { GiCash } from "react-icons/gi";
import { MdSupportAgent, MdPayment } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { FaTshirt } from 'react-icons/fa';
import { PiSneakerMoveFill } from "react-icons/pi";
import { BsSunglasses } from "react-icons/bs";
import Marquee from "react-fast-marquee";
import Blog from "../components/Blog";
import Prodactcart from '../components/Prodactcart';
import axios from 'axios';
import Modal from 'react-modal';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [headerImages, setHeaderImages] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);

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

  const handleImageClick = (media) => {
    setSelectedMedia(media);
  };

  const handleCloseModal = () => {
    setSelectedMedia(null);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products/'); // Replace with your API endpoint
        const data = response.data;
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const lastFiveProducts = products.slice(-5);

  return (
    <>
      <header className="additional-header py-3">
        <div className="container-xxl">
          <div className="row justify-content-center">
            <h1 className="d-flex justify-content-center fw-medium mb-4">استوری های امروز</h1>
            <Marquee speed={10}>
              <div className="col-12 d-flex justify-content-center align-items-center">
                <div className="circle-section d-flex justify-content-between align-items-center">
                  {headerImages.map((media) => (
                    <div className="circle-link" key={media.id} onClick={() => handleImageClick(media)}>
                      {media.image_url && (
                        <img src={media.image_url} alt={media.title} className="circle-image" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Marquee>
            <Modal
              isOpen={selectedMedia !== null}
              onRequestClose={handleCloseModal}
              contentLabel="Selected Media"
              style={{
                overlay: {
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  zIndex: 1000
                },
                content: {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'transparent',
                  border: 'none',
                  maxWidth: '80vw',
                  maxHeight: '80vh',
                  zIndex: 1001
                }
              }}
            >
              {selectedMedia && selectedMedia.video_url && (
                <video src={selectedMedia.video_url} controls autoPlay className="img-fluid" style={{ maxWidth: '80%', maxHeight: '80%' }} />
              )}
              {selectedMedia && selectedMedia.image_url && (
                <img src={selectedMedia.image_url} alt={selectedMedia.title} className="img-fluid" style={{ maxWidth: '80%', maxHeight: '80%' }} />
              )}
              {selectedMedia && (
                <a href={selectedMedia.product_link} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">
                  {selectedMedia.title}
                </a>
              )}
              <button onClick={handleCloseModal} style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', color: 'white', fontSize: '24px', cursor: 'pointer' }}>×</button>
            </Modal>
          </div>
        </div>
      </header>
      <section className="py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="banner">
                <img src='/images/13.jpg' alt='capsulewordrobe' className='img-fluid' />
                <div className="banner-content">
                  <h4>کالکشن تابستانه 2024 لوسی من</h4>
                  <Link to="./Store">مشاهده و خرید</Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="banner">
                <img src='/images/14.jpg' alt='capsulewordrobe' className='img-fluid' />
                <div className="banner-content1">
                  <h4>لوسی من کلاب</h4>
                  <h5 dir='rtl'>باشگاه مشتریان VIP لوسی من</h5>
                  <Link to="/VipClub">ثبت نام در لوسی من کلاب</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Marquee>
        <section className="services-wrapper py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="services d-flex flex-wrap align-items-center justify-content-center">
                  <div className="service">
                    <CiDeliveryTruck className='icon' />
                    <h6>ارسال یک ساعته تهران</h6>
                    <p>یک روزه شهرستان</p>
                  </div>
                  <div className="service">
                    <MdPayment className='icon' />
                    <h6>پرداخت ایمن</h6>
                    <p>سیستم پرداخت آنلاین ایمن</p>
                  </div>
                  <div className="service">
                    <GiCash className='icon' />
                    <h6 dir='rtl'>365 روز ضمانت کیفیت کالا و بازگشت وجه</h6>
                  </div>
                  <div className="service">
                    <MdSupportAgent className='icon' />
                    <h6>پشتیبانی 24/7</h6>
                    <p>پشتیبانی هفت روز هفته و 24 ساعته</p>
                  </div>
                  <div className="service">
                    <CiDiscount1 className='icon' />
                    <h6>تخفیف ویژه</h6>
                    <p>طرح های تخفیفی هر هفته</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Marquee>
      <div className="banner">
        <img src='/images/15.jpeg' alt='cashback' className='img-fluid' />
      </div>
      <section className="categories-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap align-items-center justify-content-center">
                <Link to="/store" className="category" style={{ marginTop: '10px' }}>
                  <img src='/images/jeans.jpg' alt='capsulewordrobe' className='icon' style={{ width: '100px', height: '75px' }} />
                  <h6>شلوار</h6>
                </Link>
                <Link to="/store" className="category">
                  <FaTshirt className='icon' />
                  <h6>تیشرت</h6>
                </Link>
                <Link to="/store" className="category">
                  <PiSneakerMoveFill className='icon' />
                  <h6>کتونی</h6>
                </Link>
                <Link to="/store" className="category">
                  <BsSunglasses className='icon' />
                  <h6>اکسسوری</h6>
                </Link>
                <Link to="/store" className="category">
                  <img src='/images/perfume.png' alt='capsulewordrobe' className='icon' style={{ width: '80px', height: '90px' }} />
                  <h6>عطر</h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marquee-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper">
                <h2 className="d-flex justify-content-center fw-medium mb-4">اخرین محصولات</h2>
                <Marquee>
                  {products.map((product) => (
                    <div className="marquee-inner" key={product.id}>
                      <Link to={`/takmahsol/${product.id}`}>
                        <img src={product.image_url} alt={product.title} className="img-fluid img-front circular-shadow" style={{ width: '100px', height: '100px' ,borderRadius: '50%'}} />
                      </Link>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">پرفروش های این هفته</h3>
            </div>
            {lastFiveProducts.map((product) => (
              <Prodactcart key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
