import React, { useEffect } from 'react';
import '../styles/StarBackground.css';

const StarBackground = () => {
  useEffect(() => {
    const container = document.querySelector('.star-container');
    if (!container) return; // Ensure container exists

    const starCount = 950; // Number of stars

    const createStars = () => {
      // Clear existing stars before creating new ones
      container.innerHTML = ''; 
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random animation delay and duration for variety
        star.style.animationDelay = `${Math.random() * 3}s`;
        star.style.animationDuration = `${2 + Math.random() * 3}s`; 
        
        container.appendChild(star);
      }
    };

    createStars(); // Initial creation

    // Recreate stars on resize for responsiveness
    window.addEventListener('resize', createStars);
    
    // Cleanup function to remove listener when component unmounts
    return () => {
      window.removeEventListener('resize', createStars);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return <div className="star-container" />;
};

export default StarBackground;
