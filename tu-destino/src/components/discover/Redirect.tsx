"use client";

import { FC } from "react";
import { useSelectContext } from "../../context/SelectContext";
import Link from "next/link";

type SelectNameProps = {
  name: string;
};

const Redirect: FC<SelectNameProps> = ({ name }) => {
  const { setDiscoverName } = useSelectContext();

  const handleRedirect = () => {
    setDiscoverName(name);
  };

  return (
    <Link
      target="_blank"
      href={`/places/details/${name}`}
      color="primary"
      onClick={handleRedirect}
    >
      Detalles
    </Link>
  );
};

export default Redirect;
