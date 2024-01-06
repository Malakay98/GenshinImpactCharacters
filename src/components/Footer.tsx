import React from 'react';
import './../styles/footer.css'; // Import the CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer"> {/* Apply the 'footer' class */}
      {/* Your footer content */}
      <p>&copy; 2023 Franco Fernandez. All rights reserved.</p>
      <p>
        Special thanks to{''}
        <a href="https://github.com/genshindev" target="_blank" rel="noopener noreferrer">
        genshin.dev
        </a>
      </p>
    </footer>
  );
};

export default Footer;