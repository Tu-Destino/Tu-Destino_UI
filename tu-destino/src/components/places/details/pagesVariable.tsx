// pages/[variable].tsx
'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SliderDetails from './Slider';


const VariablePage = () => {
  {
    const router = useRouter();
    const { id } = router.query; // Captura el parámetro de la URL
  
    const [dynamicContent, setDynamicContent] = useState('');
  
    useEffect(() => {
      if (id) {
        const decodedId = decodeURIComponent(id as string); // Decodifica el parámetro de la URL
        setDynamicContent(`Contenido dinámico para ${decodedId}`);
      }
    }, [id]);
  
    return (
      <div>
        <h1>{dynamicContent}</h1>
        
      </div>
    )  
};
}

export default VariablePage;
