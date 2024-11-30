import { useGetPlaceQuery } from "@/redux/apis/placeApi";
import { poppins } from "@/styles/fonts";
import {
  LocationOnOutlined,
  Schedule,
  AttachMoney,
  StarBorderRounded,
  LocalPhoneRounded,
  Web,
  SvgIconComponent,
} from "@mui/icons-material";
import React from "react";

export default function CardInfoTop({ decodedId }: { decodedId: string }) {
  const { data: placeData } = useGetPlaceQuery(decodedId);
  return (
    <div className=" w-full flex justify-center">
      <div className=" max-w-[1300px] w-full px-3 sm:px-14">
        <section className="border-b border-[#DDDDDD] pb-10 grid grid-cols-2 sm:grid-cols-6 md:grid-rows-1">
          <Card Icon={StarBorderRounded} title="Calificación" text="4.5" />
          <Card
            Icon={LocationOnOutlined}
            title="Ubicación"
            text={placeData?.address}
          />
          <Card Icon={Schedule} title="Horario" text={placeData?.schedule}/>
          <Card Icon={AttachMoney} title="Precio" text={placeData?.price}/>
          <Card Icon={LocalPhoneRounded} title="Teléfono" text={placeData?.phone}/>
          <Card Icon={Web} title="Sitio web" text={placeData?.web} />
        </section>
      </div>
    </div>
  );
}

// Define el tipo para el prop `icon`
interface CardProps {
  Icon: SvgIconComponent; // El tipo correcto para pasar un componente como prop
  title: string;
  text?: string;
}

const Card: React.FC<CardProps> = ({ Icon, title, text }) => {
  return (
    <div className="col-span-1 h-24 lg:h-28 border-r pb-1 border-[#DDDDDD] flex justify-center">
      <div className=" h-full w-4/5 max-w-[125px] flex justify-between flex-col">
        <div className="">
          <h3 className="text-[13px] text-[#3c3c3c] md:text-base lg:text-lg">
            {title}
          </h3>
          <p
            className={`max-h-11 text-black ${poppins.className} overflow-scroll`}
          >
            {text}
          </p>
        </div>
        <div className="">
          {Icon && (
            <Icon
              stroke="currentColor"
              strokeWidth={0.01}
              className={`text-[#222222] size-6 lg:size-8 flex justify-start`}
            />
          )}
        </div>
      </div>
    </div>
  );
};
