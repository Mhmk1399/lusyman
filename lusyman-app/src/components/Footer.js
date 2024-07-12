import React from 'react'
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';

const footer = () => {
  return (
    <div>
      <>
      <footer className='py-4'>
          <div className="container-xxl d-flex justify-content-center align-items-center">
            <div className="row align-items-center">
              <div className="col-12 text-center">
                <div className="footer-top-data d-flex flex-column align-items-center gap-3 ">
                  <img src='/images/1.2.png' alt='logo' className='footer-logo'/>
                  <h2 className='mb-0 '>
                    ثبت نام در لوسی من کلاب 
                  </h2>
                </div>
                <div className="input-group mt-3 text-center" dir='rtl'>
                  <Link to="/SignUp" className="btn btn-dark">
                  <button className="btn btn-dark" type="button" id="basic-addon2">
                    دنبال کردن
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
      </footer>

      {/* <footer className='py-3'>
        <div className="container-xxl">
          <div className="row">
          
            <div className="col-4"><h4 className='mb-4'>راه های ارتباطی</h4><div></div>
              
            </div>
            <div className="col-3"><h4 className='mb-4'>دسته بندی  محصولات</h4><div></div></div>
            <div className="col-3"><h4 className='mb-4'>لوسی من کلاب</h4><div></div></div>
            <div className="col-2"><h4 className='mb-4'>لینک های مفید
            </h4>
            <div>
              
            </div>
            </div>
            </div>
        </div>
      </footer> */}
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <p className='text-center text-white fw-light'>
                &copy; {new Date().getFullYear()};lusyman. All rights reserved.
              </p>

            </div>  
          </div>
        </div>
      </footer>
      
      </>
    </div>
  )
}

export default footer
