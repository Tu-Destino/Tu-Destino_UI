'use client'
import React, { useState, useLayoutEffect } from 'react';
import ButtonPanel from './ButtonPanel';
import NavDiscover, { AddPost } from './NavDiscover';
import Gallery from "../../components/discover/Gallery";
import '../../styles/discover.css'
import useData from '@/helpers/Zustand/DataLoad';


const ButtonModalDesktop: React.FC =()=>{

  return ( 
    <div className='fixed z-50 bg-green-400 bottom-[1%] right-[2%] rounded-full'>
      <AddPost element={'Postear'}/>
    </div>
)
};

const ToggleNav: React.FC = () => {
  
    const [showComponent, setShowComponent] = useState<boolean | null>(null);
    const { tags, postDiscover} = useData();
  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setShowComponent(true);
      } else {
        setShowComponent(false);
      }
    };
 
    window.addEventListener('resize', handleResize);
    setTimeout(handleResize, 1300);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  if(postDiscover.length===0){
    return(<>
      <div className="loader">
        <div></div> 
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>  
    )
  }

  return (
    <>
      {showComponent ? (
        <>
        <ButtonPanel suggestions={tags}/>
        <Gallery initialPlaces={postDiscover}/>
        <ButtonModalDesktop/>
        </>
      ) : (
        <>
        <NavDiscover/>
        <Gallery initialPlaces={postDiscover}/>
        </>
      )}
    </>
  );
};

export default ToggleNav;
