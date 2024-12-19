"use client";
import { FC } from "react";
import Link from "next/link";
import { TagsProps } from "@/types/types";
import { Button } from "@nextui-org/react";

const Redirect: FC<TagsProps> = ({ labels }) => {
  return (
    <Link href={`/places/details/${labels}`}>
      <Button
        color="primary"
        variant="light"
      >
        Detalles
      </Button>
    </Link>
  );
};

export default Redirect;
