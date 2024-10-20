"use client";

import SliderDetails from "@/components/places/details/Slider";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
const list=["https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/naturaleza/Botanico/jjjrls8pkaskjz4stuvd.jpg","https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/cultura/Palacio%20Rafael%20Uribe%20Cultura/hpi6dcccsvmnbpp2pzce.jpg","https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/historia/MuseoCastillo/op4ahaps1idu5uvptbwg.jpg","https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/den1krumk48nfabnwiir.jpg","https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/naturaleza/Botanico/jjjrls8pkaskjz4stuvd.jpg","https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/cultura/Palacio%20Rafael%20Uribe%20Cultura/hpi6dcccsvmnbpp2pzce.jpg","https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/historia/MuseoCastillo/op4ahaps1idu5uvptbwg.jpg","https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/den1krumk48nfabnwiir.jpg","https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/naturaleza/Botanico/jjjrls8pkaskjz4stuvd.jpg","https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/cultura/Palacio%20Rafael%20Uribe%20Cultura/hpi6dcccsvmnbpp2pzce.jpg","https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/historia/MuseoCastillo/op4ahaps1idu5uvptbwg.jpg","https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/den1krumk48nfabnwiir.jpg","https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/naturaleza/Botanico/jjjrls8pkaskjz4stuvd.jpg","https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/cultura/Palacio%20Rafael%20Uribe%20Cultura/hpi6dcccsvmnbpp2pzce.jpg","https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/historia/MuseoCastillo/op4ahaps1idu5uvptbwg.jpg","https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/den1krumk48nfabnwiir.jpg"]

const PageDetail: React.FC = () => {
  const params = useParams();
  const { id } = params;

  const [decodedId, setDecodedId] = useState<string>("");

  useEffect(() => {
    if (id) {
      const decodedIdValue = Array.isArray(id)
        ? decodeURIComponent(id[0])
        : decodeURIComponent(id);
      setDecodedId(decodedIdValue);
    }
  }, [id]);

  return (
    <>
    <h1>{decodedId}</h1>
    
    <SliderDetails suggestions={list}/>
    </>
  );
};

export default PageDetail;
