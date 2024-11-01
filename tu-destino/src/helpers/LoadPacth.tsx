"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { loadVerify } from "./Zustand/Load";

const useVerifyPath = () => {
  const path = usePathname();
  const searchParams = useSearchParams();
  console.log(path, "------", searchParams);
  useEffect(() => {
    loadVerify();
  }, [path, searchParams]);
};

export default useVerifyPath;
