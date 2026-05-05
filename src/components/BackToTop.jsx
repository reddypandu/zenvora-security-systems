import React from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button 
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-60 hidden md-flex bg-primary-light p-3 rounded-full hover:bg-secondary transition-colors"
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default BackToTop;
