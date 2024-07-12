import React from 'react';
import PropTypes from 'prop-types';

const SizeChartModal = ({ show, onClose, product, sizes }) => {
  if (!show) {
    return null;
  }

  // Determine the headers based on the product category
  const isPantsCategory = product.category === "شلوار";
  const headers = isPantsCategory 
    ? ["سایز", "قد شلوار", "عرض کمر"]
    : ["سایز", "عرض شونه", "عرض سینه", "قد بالا تنه", "قد شلوار", "عرض کمر"];

  return (
    <div className="modal-container1">
      <div className="modal-background1" onClick={onClose}></div>
      <div className="modal-content1">
        <button onClick={onClose} className="close-button1">
          &times;
        </button>
        <img
          src={product.image_url}
          alt={product.title}
          className="sizechart-image"
        />
        <table className="sizechart-table">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sizes.map((size) => (
              <tr key={size.id}>
                <td>{size.name}</td>
                {!isPantsCategory && (
                  <>
                    <td>{size.shoulder_width}</td>
                    <td>{size.chest_width}</td>
                    <td>{size.top_length}</td>
                  </>
                )}
                <td>{size.bottom_length}</td>
                <td>{size.waist_width}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

SizeChartModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default SizeChartModal;
