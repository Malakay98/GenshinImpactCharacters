import React from 'react';

const Header: React.FC = () => {
  const headerStyle: React.CSSProperties = {
    backgroundColor: '#fec5bb', // Light Pink
    color: '#000', // Black text color
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <header style={headerStyle}>
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