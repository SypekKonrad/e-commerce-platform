import React from 'react';
import Navbar from './components/Navbar'; // Adjust paths based on your structure
import Carousel from './components/Carousel'; // Assuming you created a carousel
import Footer from './components/Footer';
import './App.css';
import ProductCarousel from "./components/Carousel"; // Global styles for the App, if needed

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <ProductCarousel />
        {/* Add more sections or components here as needed */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
