import React from 'react';
import { FaFlag } from 'react-icons/fa';
import Prodactcart from '../components/Prodactcart';
import Blog from '../components/Blog';
import { Link } from 'react-router-dom';

const Blogpage = () => {
  return (
    <div
      className="store-wrapper home-wrapper2 py-2 information-text"
      dir="rtl"
    >
      <div className="container-xxl">
        <div className="row">
          <div className="col-3">
            <div className="filter-card py-4">
              <h3 className="filter-card-title text-center">سرفصل ها</h3>
              <div>
                <ul>
                  <li className="information-text fw-bold">
                    وبینار ها و سمینار ها
                    <ul className="sub-list fw-light">
                      <li className="sub-information-text">
                        <Link>وبینار اسفند 1402</Link>
                      </li>
                      <li className="sub-information-text">
                        <Link>
                        وبینار تیر ماه 1403
                        </Link>
                      </li>
                      <li className="sub-information-text">
                        <Link>
                        سمینار حضوری شهریور 1403
                      </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="information-text fw-bold">
                    مقالات و آموزش های رایگان
                    <ul className="sub-list fw-light">
                      <li className="sub-information-text">
                        <input type="checkbox" />
                        اموزش های بالاتنه
                      </li>
                      <li className="sub-information-text">
                        <input type="checkbox" />
                        آموزش های پایین تنه
                      </li>
                      <li className="sub-information-text">
                        <input type="checkbox" />
                        آموزش های  رنگ شناسی
                      </li>
                      
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-9">
            <div className="row">
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogpage;