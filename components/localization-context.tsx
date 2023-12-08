import { createContext, useContext } from "react";
import en from "@/locales/en";
import tr from "@/locales/tr";

export type LocalizationContextType = typeof en; // Adjust the type based on your translation file structure

const LocalizationContext = createContext<LocalizationContextType>(en);

export const useLocalization = () => {
  return useContext(LocalizationContext);
};

export function LocalizationProvider({
  value,
  children,
}: {
  value: LocalizationContextType;
  children: React.ReactNode;
}) {
  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
}
