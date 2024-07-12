import React from 'react'
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <>
      <div className="col-3 blog-main">
        <div className="blog-card">
          <div className="card-image">
            <img src="/images/blog1.jpg" alt="blog" className="img-fluid" />
            <div className="blog-content">
              <div className="date">1 خرداد 1403</div>
              <div className="titel">style</div>
              <div className="descripstion">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nihil nobis sed pariatur perspiciatis hic dolore velit, est quam maiores deserunt facere praesentium ad assumenda doloremque quas! Nemo, doloremque vitae.</p>
              <Link to="#">ادامه مطلب</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog;
