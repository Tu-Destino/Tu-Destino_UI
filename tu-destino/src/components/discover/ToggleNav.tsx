'use client'
import React, { useState, useEffect } from 'react';
import ButtonPanel from './ButtonPanel';
import NavDiscover from './NavDiscover';


const ToggleNav: React.FC = () => {
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 769) {
        setShowComponent(true);
      } else {
        setShowComponent(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {showComponent ? (
        <ButtonPanel/>
      ) : (
        <NavDiscover/>
      )}
    </>
  );
};

export default ToggleNav;
