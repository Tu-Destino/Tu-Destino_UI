import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import getListTitle from "@/redux/listTitles/thunks";
import { ChangeEvent, useEffect, useState } from "react";

export const useSearchBar = () => {
  const { listTitle = [] } = useAppSelector((state) => state.listTitles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getListTitle());
  }, []);

  const [textInput, setTextInput] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [sizeWidth, setSizeWidth] = useState(230);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > sizeWidth) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      //console.log(window.scrollY);
    };

    const handleResize = (): void => {
      if (window.innerWidth < 495) {
        setSizeWidth(338);
      } else if (window.innerWidth < 640) {
        setSizeWidth(311);
      } else if (window.innerWidth < 718) {
        setSizeWidth(411);
      } else if (window.innerWidth < 768) {
        setSizeWidth(387);
      } else if (window.innerWidth < 886) {
        setSizeWidth(368);
      } else if (window.innerWidth < 1280) {
        setSizeWidth(339);
      } else if (window.innerWidth < 1536) {
        setSizeWidth(369);
      } else {
        setSizeWidth(399);
      }
    };

    // Ejecutar las funciones al cargar el componente
    handleScroll();
    handleResize();

    // Agregar los event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Limpiar los event listeners al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isScrolled, sizeWidth]);

  const filteredWords = listTitle.filter((word) =>
    word.toLowerCase().includes(textInput)
  );
  // Manejador de cambio de texto en el input
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTextInput(e.target.value.toLowerCase());
  };
  return {
    isScrolled,
    textInput,
    handleSearch,
    filteredWords,
    setTextInput,
  };
};
