import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Namaiandegi = () => {
  return (
    <>
      <div className="home-wrapper3">
        <div className="container xx-l">
          <div className="row d-flex flex-wrap-wrap">
            <div className="col-12 flex-1">
              <div className="marquee-brand mb-3">
                <Marquee>
                  <div className="marquee-image">
                    <Link to="https://www.zara.com/turkey">
                      <img src='/images/zara.png' alt='brand' className='py-3'/>
                    </Link>
                    <p className='brandname'>zara</p>
                  </div>
                  
                  <div className="marquee-image">
                    <Link to="https://www.bershka.com/">
                      <img src='/images/breshka.png' alt='brand' />
                    </Link>
                    <p className='brandname'>breska</p>
                  </div>
                  <div className="marquee-image">
                    <Link to="https://www.adidas.com.tr/en">
                      <img src='/images/adidas.png' alt='brand' />
                    </Link>
                    <p className='brandname'>adidas</p>
                  </div>
                  <div className="marquee-image">
                    <Link to="https://www.nike.comhttps://www.nike.com/tr/">
                      <img src='/images/nike.jpg' alt='brand' />
                    </Link>
                    <p className='brandname'>nike</p>
                  </div>
                </Marquee>
              </div>
              <div className="form-container">
                <form>
                  <div className="form-group">
                    <label htmlFor="productName">Product Name:</label>
                    <input type="text" id="productName" name="productName" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input type="text" id="price" name="price" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="image">Upload Image:</label>
                    <input type="file" id="image" name="image" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="finalPrice">Final Price:</label>
                    <input type="text" id="finalPrice" name="finalPrice" />
                  </div>
                  <button type="submit" className="buy-button">Buy</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Namaiandegi;
