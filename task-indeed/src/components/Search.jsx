import React from 'react';
import '../App.css'
const SearchAndLogin = () => {
  return (
    <div className="search-and-login">
      <input type="text" placeholder="Search" className="search-bar" />
      <button className="login-button">Login</button>
    </div>
  );
};

export default SearchAndLogin;
