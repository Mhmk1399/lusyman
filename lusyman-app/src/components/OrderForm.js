import React, { useState } from 'react';
import axios from 'axios';


const OrderForm = () => {
    const [code, setCode] = useState('');
    const [status, setStatus] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/check-order-status/', { code });
            setStatus(response.data.status);
            if (response.data.postal_code) {
                setPostalCode(response.data.postal_code);
            }
        } catch (error) {
            setStatus('سفارش در حال اماده سازی');
            setPostalCode('');
        }
    };

    return (
        <div className="order-form-container">
            <p className="product-description text-center fw-bolder mb-3">لطفا برای برسی وضعیت خرید خود شماره موبایل  خود را در کادر ززیر وارد کنید</p>
            <form onSubmit={handleSubmit} className="order-form">
                <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="لطفا شماره موبایل خود را وارد کنید "
                />
                <button type="submit">برسی وضعیت</button>
            </form>
            {status && <div className="order-status">وضعیت: {status}</div>}
            {postalCode && <div className="postal-code">کد مرسوله: {postalCode}</div>}
        </div>
    );
};

export default OrderForm;
