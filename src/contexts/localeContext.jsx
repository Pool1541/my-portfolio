import { useState } from "react";
import { createContext } from "react";
import locale from "../locale/locale";

export const LocaleContext = createContext();

export default function LocaleContextProvider({ children }) {
  const [lang, setLang] = useState(locale.es);

  function changeLang() {}

  return (
    <LocaleContext.Provider
      value={{
        lang,
        setLang,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}
