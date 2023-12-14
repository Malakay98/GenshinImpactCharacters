import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        {/* Your navigation links or any content for the header */}
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          {/* Add other navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;