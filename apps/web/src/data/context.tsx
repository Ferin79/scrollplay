import React, { createContext, useEffect, useState } from "react";

export interface ContextType {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<ContextType | null>(null);

export const ContextProvider: React.FC<any> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const darkmode = localStorage.getItem("darkmode");
    if (darkmode && darkmode === "true") {
      setIsDarkMode(true);
    }
  }, []);
  return (
    <Context.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        setIsLoading,
        isLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};
