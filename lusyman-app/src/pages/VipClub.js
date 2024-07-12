import React, { useState } from 'react';
import CoinAnimation from '../components/CoinAnimation';
import ClubItem from '../components/ClubItem';

const VipClub = () => {
  const [coinprice, setcoinprice] = useState(100);
  const [cashback, setcashback] = useState("2%");

  return (
    <div className="vip-club" dir='rtl'>
      <div className="container xx-l">
        <div className="row">
        <div className="content">
          <CoinAnimation />
          <div className="howtogetCoin my-4">
            <p className="subinformation">
              شما به ازای هر خرید خود چه به صورت حضوری و چه به صورت آنلاین علاوه بر {cashback} یک سکه بدست خواهدی آورد که میتوانید با سکه های خود از خدمات زیر استفاده کنید و یا در خرید های خود از ان ها برای کم کردن هزینه خرید خود استفاده کنید که مقدار هر سکه برابر با {coinprice} میباشد
            </p>
          </div>
          <div className="club-information my-5 p-4 shadow rounded bg-light">
            <div className="club-title">
              <h3 className="information-text">
                خدمات لوسی من کلاب
              </h3>
            </div>
            <p className="subinformation fw-lighter">
              لطفا خدمات مد نظر خود را وارد  نمایید و  همکاران ما در اصرع وقت برای هماهنگی و تحویل با شما تماس میگیرند 
            </p>
          </div>
          
          
          <div className="row club-items">
            <div className="col-12"><ClubItem /></div>
            <div className="col-12"><ClubItem /></div>
            <div className="col-12"><ClubItem /></div>
            <div className="col-12"><ClubItem /></div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default VipClub;
