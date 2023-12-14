import React from 'react';

const Footer: React.FC = () => {
  const footerStyle: React.CSSProperties = {
    backgroundColor: '#fec5bb', // Light Pink
    color: '#000', // Black text color
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <footer style={footerStyle}>
      {/* Your footer content */}
      <p>&copy; 2023 Franco Fernandez. All rights reserved.</p>
      <p>Special thanks to <a href="http://https://gshimpact.vercel.app" target="_blank" rel="noopener noreferrer">GSHIMPACT API</a></p>
    </footer>
  );
};

export default Footer;