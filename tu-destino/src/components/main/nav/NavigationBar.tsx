"use client";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";
import Languages from "./Languages";
import Login from "./Login";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { poppins } from "@/styles/fonts";

function NavigationBar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <nav className="bg-white w-full h-[63px] flex flex-row border-b border-[#e0e0e0] fixed z-50">
      <div className="md:hidden w-12 flex justify-center items-center">
        <button onClick={onOpen}>
          <MenuIcon />
        </button>
        <Modal
          isOpen={isOpen}
          placement="top-center"
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody className="mt-8 mb-4 flex justify-center items-center">
                  <Link className={`hover:bg-slate-100 w-full text-center p-3 rounded-xl ${poppins.className} font-normal`} href="/places">
                    Lugares
                  </Link>
                  <Link className={`hover:bg-slate-100 w-full text-center p-3 rounded-xl  ${poppins.className} font-normal`} href="/discover">
                    Descubrir
                  </Link>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
      <div className=" w-[3rem] md:w-[22%] lg:w-[35%]  h-full flex items-center ">
        <Link href="#">
          <img
            src="/logoYourDestiny.png"
            alt="Logo Tu Destino"
            className="hidden md:flex ml-12  w-28 "
          />
          <img
            src="/logoSmall.png"
            alt="Logo Tu Destino"
            className="md:hidden  w-12 "
          />
        </Link>
      </div>
      <div className="bg-slate-300 flex-grow md:w-[30%] h-full"></div>
      <div className="flex w-[9.5rem] md:w-[48%] lg:w-[35%] h-full  items-center justify-around ">
        <div className="hidden md:flex flex-1 justify-around">
          <Link
            className="w-28 h-10 flex items-center justify-center rounded-3xl hover:bg-slate-100"
            href="/discover"
          >
            Descubrir
          </Link>
          <Link
            className="w-24 h-10 flex items-center justify-center rounded-3xl hover:bg-slate-100"
            href="/places"
          >
            Lugares
          </Link>
        </div>
        <div className="flex">
          <Languages />
          <Login />
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
