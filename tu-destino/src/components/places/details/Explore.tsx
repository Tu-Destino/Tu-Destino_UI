import React, { useEffect, useRef } from 'react';

const Explore: React.FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imgRef.current) {
        const rect = imgRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
          imgRef.current.classList.add('img-rotate');
        } else {
          imgRef.current.classList.remove('img-rotate');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className='bg-gradient-to-b from-white via-white to-backgroundYellow flex flex-col justify-center items-center py-[18rem]'>
      <img ref={imgRef} className='w-[130px] h-[130px] m-0 mx-auto mb-11' src="/logoSmall.png" alt="Logo de Tu Destino" />
      <div className='w-full md:w-[80%] text-center  m-4 p-6 md:p-12'>
        <h1 className='text-[#1d1d1f] text-clamptitle leading-[98%]'><strong>Explora Medellin desde la comodidad de tu casa</strong></h1>
      </div>
      <div className='w-full md:w-[43%] h-auto  text-center'>
        <p className='text-[#86868b] mt-4 mx-16 mb-0 text-clamptext'>
          <strong className='text-[#000000ad]'>Descubre una nueva dimensión</strong> en la planificación de tu próximo destino con la fascinante experiencia de Realidad Virtual (VR) de <strong className='text-TD'>Tu Destino. </strong>
          Convierte tu espacio en un portal personal hacia los destinos que te esperan. Descubre destinos desde la comodidad de tu casa, fusionando la realidad virtual con la emoción de explorar un mundo nuevo.
        </p>
      </div>
    </section>
  );
};

export default Explore;
