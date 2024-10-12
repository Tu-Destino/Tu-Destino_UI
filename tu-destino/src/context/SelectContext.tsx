'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type SelectContextState = {
  discoverName: string;
  setDiscoverName: (value: string) => void;
  
};

const SelectContext = createContext<SelectContextState | undefined>(undefined);

export const SelectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [discoverName, setDiscoverName] = useState<string>('');
 

    return (
    <SelectContext.Provider value={{ discoverName, setDiscoverName }}>
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
