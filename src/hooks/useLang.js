import { useContext } from "react";
import { LocaleContext } from "../contexts/localeContext";

export default function useLang() {
  const { lang, setLang } = useContext(LocaleContext);

  return {
    lang,
    setLang,
  };
}
