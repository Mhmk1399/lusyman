import React, { useState } from 'react';
import CustomAlert from './CustomAlert';

const ClubItem = ({ isLoggedIn }) => {
  const [laundryCost, setLaundryCost] = useState(100);
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    if (!isLoggedIn) {
      setShowAlert(true); // Show login alert if not logged in
    } else {
      // Proceed with service logic (e.g., deduct coins, perform service, etc.)
      setShowAlert(true); // Show service success alert (replace with actual logic)
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="club-item">
      <div className="container-xxl py-3">
        <div className="row">
          <div className="col-12">
            <div className="icon-image bg-white p-4 shadow rounded">
              <img src="images/washingmachin.png" alt="items" className="item-image" />
              <h4 className='item-info mt-3'>
                خشک شویی
              </h4>
              <p className="item-price">
                هر درخواست : {laundryCost} سکه
              </p>
              {isLoggedIn ? (
                <button type="button" className="btn btn-dark btn-lg mt-3" onClick={handleButtonClick}>استفاده از خدمات</button>
              ) : (
                <p className="text-muted mt-3">برای استفاده از این خدمات باید وارد حساب کاربری خود شوید.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <CustomAlert 
        show={showAlert} 
        handleClose={handleCloseAlert} 
        message={isLoggedIn ? `${laundryCost} سکه از حساب کار بری شما کم شد. همکاران ما در کم ترین زمان ممکن برای هماهنگی بیشتر با شما تماس خواهند گرفت` : 'برای استفاده از این خدمات باید وارد حساب کاربری خود شوید.'} 
      />
    </div>
  );
}

export default ClubItem;
