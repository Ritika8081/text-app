import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faClock, faStar } from '@fortawesome/free-solid-svg-icons';

const ButtonGroup = () => {
  const buttonGroupStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const transparentButtonStyle = {
    background: 'transparent',
    border: 'none',
    margin: '0 10px',
    padding: '10px 20px 8px 8px ',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div style={buttonGroupStyle}>
      <button style={transparentButtonStyle}>
        <FontAwesomeIcon icon={faFire} /> Popular Coupons
      </button>
      <button style={transparentButtonStyle}>
        <FontAwesomeIcon icon={faClock} /> Ending Soon
      </button>
      <button style={transparentButtonStyle}>
        <FontAwesomeIcon icon={faStar} /> Latest Coupons
      </button>
    </div>
  );
};

export default ButtonGroup;
