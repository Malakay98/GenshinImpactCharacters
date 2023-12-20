import React from 'react';
import './../styles/footer.css'; // Import the CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer"> {/* Apply the 'footer' class */}
      {/* Your footer content */}
      <p>&copy; 2023 Franco Fernandez. All rights reserved.</p>
      <p>
        Special thanks to{' '}
        <a href="http://https://gshimpact.vercel.app" target="_blank" rel="noopener noreferrer">
          GSHIMPACT API
        </a>
      </p>
    </footer>
  );
};

export default Footer;