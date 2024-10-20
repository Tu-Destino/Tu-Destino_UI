"use client";

import { FC } from "react";
import { useSelectContext } from "../../context/SelectContext";
import Link from "next/link";
import { TagsProps } from "@/types/types";

const Redirect: FC<TagsProps> = ({ labels }) => {
  const { setDiscoverName } = useSelectContext();

  const handleRedirect = () => {
    setDiscoverName(labels);
  };

  return (
    <Link
      target="_blank"
      href={`/places/details/${labels}`}
      color="primary"
      onClick={handleRedirect}
    >
      Detalles
    </Link>
  );
};

export default Redirect;
