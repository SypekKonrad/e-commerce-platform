import React from 'react';
import './Footer.css'; // Optional: You can modularize the CSS

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2024 MyShop. All Rights Reserved.</p>
        <ul className="social-links">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;