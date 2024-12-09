"use client";
import { FC } from "react";
import Link from "next/link";
import { TagsProps } from "@/types/types";

const Redirect: FC<TagsProps> = ({ labels }) => {
  return (
    <Link
      target="_blank"
      href={`/places/details/${labels}`}
      color="primary"
    >
      Detalles
    </Link>
  );
};

export default Redirect;
