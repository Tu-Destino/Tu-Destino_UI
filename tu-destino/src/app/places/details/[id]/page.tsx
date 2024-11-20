"use client";

import Footer from "@/components/common/footer/Footer";
import NavigationBar from "@/components/common/nav/NavigationBar";
import CardInfo from "@/components/places/details/info/CardInfo";
import Explore from "@/components/places/details/Explore";
import SliderDetails from "@/components/places/details/Slider";
import React, { useEffect, useState } from "react";
import { getById } from "@/helpers/FetchData";
import { useParams } from "next/navigation";
import { PlaceDataProps } from "@/types/types";
const list = [
  "https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/naturaleza/Botanico/jjjrls8pkaskjz4stuvd.jpg",
  "https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/cultura/Palacio%20Rafael%20Uribe%20Cultura/hpi6dcccsvmnbpp2pzce.jpg",
  "https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/historia/MuseoCastillo/op4ahaps1idu5uvptbwg.jpg",
  "https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/den1krumk48nfabnwiir.jpg",
  "https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/naturaleza/Botanico/jjjrls8pkaskjz4stuvd.jpg",
  "https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/cultura/Palacio%20Rafael%20Uribe%20Cultura/hpi6dcccsvmnbpp2pzce.jpg",
  "https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/historia/MuseoCastillo/op4ahaps1idu5uvptbwg.jpg",
  "https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/den1krumk48nfabnwiir.jpg",
  "https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/naturaleza/Botanico/jjjrls8pkaskjz4stuvd.jpg",
  "https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/cultura/Palacio%20Rafael%20Uribe%20Cultura/hpi6dcccsvmnbpp2pzce.jpg",
  "https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/historia/MuseoCastillo/op4ahaps1idu5uvptbwg.jpg",
  "https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/den1krumk48nfabnwiir.jpg",
  "https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/naturaleza/Botanico/jjjrls8pkaskjz4stuvd.jpg",
  "https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/cultura/Palacio%20Rafael%20Uribe%20Cultura/hpi6dcccsvmnbpp2pzce.jpg",
  "https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/historia/MuseoCastillo/op4ahaps1idu5uvptbwg.jpg",
  "https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/den1krumk48nfabnwiir.jpg",
];

const PageDetail: React.FC = () => {
  

  
  const params = useParams();
  const { id } = params;

  const [decodedId, setDecodedId] = useState<string>("");
  const [data, setData] = useState<PlaceDataProps>();

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {          
          const decodedIdValue = Array.isArray(id)
            ? decodeURIComponent(id[0])
            : decodeURIComponent(id);
          setDecodedId(decodedIdValue);
          

          const responseData = await getById("place/findTitle", decodedIdValue);
          setData(await responseData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchData();
    console.log('l');
    
  }, [id]);

  console.log(data);
  

  return (
    <>
      <NavigationBar />
      <SliderDetails  imgList={list} title={data?.title? data.title:"nocas"} />
      <CardInfo /> 
      <Explore />
      <Footer />

    </>
  );
};

export default PageDetail;
