'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type SelectContextState = {
  discoverName: string;
  setDiscoverName: (value: string) => void;
  isClean: boolean;
  setIsClean: (value: boolean) => void;
  newImagen:string | ArrayBuffer |null ;
  setNewImagen: (value: string | ArrayBuffer  |null ) => void;
  newTitle: string;
  setNewTitle: (value: string) =>void;
  newDescription: string;
  setNewDescription: (value : string)=> void;
  newTags:string;
  setNewTags: (value : string)=>void;

};

const SelectContext = createContext<SelectContextState | undefined>(undefined);

export const SelectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [discoverName, setDiscoverName] = useState<string>('');
  const [isClean, setIsClean] = useState(false);
  const [newImagen,setNewImagen ] = useState<string | ArrayBuffer  | null>(null) ;
  const [newTitle,setNewTitle] = useState<string>('');
  const [newDescription,setNewDescription] = useState<string>('');
  const [newTags,setNewTags] = useState<string>('');
    return (
    <SelectContext.Provider value={{ discoverName, setDiscoverName, isClean, setIsClean,newImagen,setNewImagen,newTitle,setNewTitle,newDescription,setNewDescription,newTags,setNewTags }}>
      {children}
    </SelectContext.Provider>
  );
};

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (context === undefined) {
    throw new Error('useSelectContext must be used within a SelectProvider');
  }
  return context;
};
