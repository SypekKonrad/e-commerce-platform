import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel's styles
import './Carousel.css'; // Custom styles for the carousel

const ProductCarousel: React.FC = () => {
  return (
    <div className="carousel-container">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
      >
        <div>
          <img src="/images/product1.jpg" alt="Product 1" />
          <p className="legend">Product 1 Description</p>
        </div>
        <div>
          <img src="/images/product2.jpg" alt="Product 2" />
          <p className="legend">Product 2 Description</p>
        </div>
        <div>
          <img src="/images/product3.jpg" alt="Product 3" />
          <p className="legend">Product 3 Description</p>
        </div>
      </Carousel>
    </div>
  );
}

export default ProductCarousel;
