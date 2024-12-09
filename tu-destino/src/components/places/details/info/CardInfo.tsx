import React from "react";

import CardInfoTop from "./CardInfoTop";
import { Place } from "@/redux/apis/placeApi";
const CardInfo = ({ data, decodedId }: { data?: Place; decodedId: string }) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <>
      <CardInfoTop decodedId={decodedId} />
      <div className="flex justify-center w-full">
        <section className="w-full max-w-[1300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  p-3 sm:p-14 ">
          <div className="bg-white border-1 h-[30rem] shadow-lg rounded-md flex flex-col item-center w-full py-1 px-4">
            <div className="h-full flex flex-col justify-center items-center w-full overflow-y-auto rounded-sm">
              <h2 className="text-[1.4rem] h-[12%] content-center">
              Descripción:
              </h2>
              <p className=" h-[88%]">{data?.details}</p>
            </div>
          </div>
          <div className="bg-white h-[30rem] border-1 shadow-lg rounded-md flex flex-col item-center w-full py-1 px-4">
            <div className="h-full flex flex-col justify-center items-center w-full overflow-y-auto rounded-sm">
              <h2 className="text-[1.4rem] h-[12%] content-center">
                Un poco de historia:
              </h2>
              <p className=" h-[88%]">{data?.information}</p>
            </div>
          </div>
          <div className="bg-blue-300 h-[30rem] shadow-lg rounded-md flex item-center justify-center lg:col-span-1 md:col-span-2">
            <iframe
              height="480"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${data?.title}/${data?.coordinates}`}
              className="w-full"
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
};

export default CardInfo;
