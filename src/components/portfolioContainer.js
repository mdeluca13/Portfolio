// Adding necessary imports
import React from 'react';
import Header from './header';
import Footer from './footer';

// Setting what to include in portfolio container for App() to render
export default function PortfolioContainer() {
  document.title = 'Megan De Luca Portfolio';

  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
};