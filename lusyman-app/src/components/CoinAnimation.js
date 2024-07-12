import React ,{ useState } from 'react'
import { useSpring, animated } from '@react-spring/web';

const CoinAnimation = () => {
    const [coins, setCoins] = useState(100);
  
    const spin = useSpring({
      from: { rotateZ: 0 },
      to: { rotateZ: 360 },
      loop: true,
      config: { duration: 4000 }
    });
  
    return (
      <div className="coin-container">
        <animated.div style={spin} className="coin">
          <img src="/images/coin1.png" alt="Coin" />
        </animated.div>
        <p className="coin-text information-text"dir="rtl">اعتبار فعلی: {coins} سکه.</p>
      </div>
      
    );
  };
  
  export default CoinAnimation;