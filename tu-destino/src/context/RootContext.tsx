"use client";
import useVerifyPath from "@/helpers/LoadPacth";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type RootContextState = {
  someRootVariable: string;
  setSomeRootVariable: (value: string) => void;
};

const RootContext = createContext<RootContextState | undefined>(undefined);

export const RootProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [someRootVariable, setSomeRootVariable] = useState<string>("");
  useVerifyPath(); // Llama al hook con el path actual
  return (
    <RootContext.Provider value={{ someRootVariable, setSomeRootVariable }}>
      {children}
    </RootContext.Provider>
  );
};

export const useRootContext = () => {
  const context = useContext(RootContext);
  if (context === undefined) {
    throw new Error("useRootContext must be used within a RootProvider");
  }
  return context;
};
