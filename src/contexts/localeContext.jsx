import { useState } from "react";
import { createContext } from "react";
import locale from "../locale/locale";

export const LocaleContext = createContext();

export default function LocaleContextProvider({ children }) {
  const [lang, setLang] = useState(locale.en);

  function spanish(callback) {
    callback();
    setLang(locale.es);
  }

  function english(callback) {
    callback();
    setLang(locale.en);
  }

  return (
    <LocaleContext.Provider
      value={{
        lang,
        spanish,
        english,
      }}>
      {children}
    </LocaleContext.Provider>
  );
}
