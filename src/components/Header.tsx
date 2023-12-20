import React from 'react';
import './../styles/header.css'; // Import the CSS file

const Header: React.FC = () => {
  return (
    <header className="header"> {/* Apply the 'header' class */}
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;