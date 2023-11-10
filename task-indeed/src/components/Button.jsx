import React from 'react';

const Button = (props) => {
  const buttonStyle = {
    backgroundColor: props.backgroundColor || 'red', // Default background color is white
    color: props.textColor || 'white',
    padding:'3%' ,
    width:"80%",
    borderRadius:'.4rem '
    // Default text color is black
  };

  return (
    <button style={buttonStyle}>
      {props.children}
    </button>
  );
};

export default Button;
