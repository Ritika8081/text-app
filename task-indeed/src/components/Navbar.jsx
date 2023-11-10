import React from 'react';

const Navbar = () => {
  return (
    <nav style={{color: 'white', background: 'black', textAlign: 'center',padding: 1 }}>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center' }}>
        <li style={{ margin: '0 10px', color: 'white'}}>
          <a href="/">Home</a>
        </li>
        <li style={{ margin: '0 10px' }}>
          <a href="/">Home</a>
        </li>
        <li style={{ margin: '0 10px' }}>
          <a href="/">Home</a>
        </li>
        <li style={{ margin: '0 10px' }}>
          <a href="/">Home</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
