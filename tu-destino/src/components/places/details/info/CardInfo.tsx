import React from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import CardInfoTop from "./CardInfoTop";
const CardInfo: React.FC = () => {
  return (
    <>
      <CardInfoTop/>
      <div className="flex justify-center w-full">
        <section className="w-full max-w-[1300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  p-3 sm:p-14 ">
          <div className="bg-blue-300 h-[30rem] shadow-lg rounded-md flex flex-col item-center w-full justify-center">
            <div className="flex flex-col justify-center items-center w-full p-4">
              <h2 className="text-[1.4rem]">Descripción:</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                voluptatem expedita voluptate harum magni cumque corrupti
                debitis ex, ullam maxime consequatur quod sint sunt cum adipisci
                ipsam veniam enim provident sed? Eum dignissimos libero at et
                qui ducimus iure ab enim, fugiat delectus, sint tempora quae
                consequatur voluptas perferendis quisquam? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Similique possimus nostrum ea
                amet, veritatis in autem minus hic. Rerum, corporis doloribus
                similique reprehenderit rem id perferendis voluptates
                repellendus, asperiores commodi quod, dignissimos aliquid
                dolore? Soluta aspernatur beatae, eos voluptatibus perspiciatis
                expedita repellendus, modi officia minima harum nam temporibus
                dolores rerum?
              </p>
            </div>
          </div>
          <div className="bg-blue-300 h-[30rem] p-4 shadow-lg rounded-md flex item-center  flex-col">
            <h2 className="text-center">Un poco de historia:</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
              nemo! Eum fugit, iste sit eos reprehenderit voluptate, distinctio
              laborum delectus facere, libero natus optio magnam.
            </p>
          </div>
          <div className="bg-blue-300 h-[30rem] shadow-lg rounded-md flex item-center justify-center lg:col-span-1 md:col-span-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5560560487725!2d-75.57203252417655!3d6.190109026946063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46828be7a83807%3A0x73d813d34659dfd4!2sMuseo%20El%20Castillo!5e0!3m2!1ses!2sco!4v1729783782463!5m2!1ses!2sco"
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
