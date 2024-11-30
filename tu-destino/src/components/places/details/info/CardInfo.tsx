import React from "react";
import CardInfoTop from "./CardInfoTop";
import { Place } from "@/redux/apis/placeApi";
const CardInfo = ({ data, decodedId }: { data?: Place; decodedId: string }) => {
  return (
    <>
      <CardInfoTop decodedId={decodedId} />
      <div className="flex justify-center w-full">
        <section className="w-full max-w-[1300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  p-3 sm:p-14 ">
          <div className="bg-blue-300 h-[30rem] shadow-lg rounded-md flex flex-col item-center w-full justify-center">
            <div className="flex flex-col justify-center items-center w-full p-4">
              <h2 className="text-[1.4rem]">Descripción:</h2>
              <p className="text-balance">{data?.details}</p>
            </div>
          </div>
          <div className="bg-blue-300 h-[30rem] p-4 shadow-lg rounded-md flex item-center  flex-col">
            <h2 className="text-center">Un poco de historia:</h2>
            <p>{data?.information}</p>
          </div>
          <div className="bg-blue-300 h-[30rem] shadow-lg rounded-md flex item-center justify-center lg:col-span-1 md:col-span-2">
            <iframe
              src={data?.link_address}
              width="100%"
              height="480"
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
};

export default CardInfo;
