'use client'
import React, { useState, useLayoutEffect, useEffect } from 'react';
import ButtonPanel from './ButtonPanel';
import NavDiscover, { AddPost } from './NavDiscover';
import Gallery from "../../components/discover/Gallery";
import '../../styles/discover.css'
import useData from '@/helpers/Zustand/DataLoad';
import logicToggleNav from '@/hooks/discover/logicToggleNav';


const ButtonModalDesktop: React.FC =()=>{
const {tags,optionSearch} =useData()
  return ( 
    <div className='fixed z-50 bg-green-400 bottom-[1%] right-[2%] rounded-full'>
      <AddPost placeElement={'Postear'} placeList={tags} placeTitles={optionSearch}/>
    </div>
)
};

const ToggleNav: React.FC = () => {
  const {isLoading,postDiscover,tags,showComponent,optionSearch} = logicToggleNav();
  if(isLoading){
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
        <NavDiscover list={tags} titles={optionSearch}/>
        <Gallery initialPlaces={postDiscover}/>
        </>
      )}
    </>
  );
};

export default ToggleNav;
