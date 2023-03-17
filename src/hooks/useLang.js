import { useContext } from "react";
import { LocaleContext } from "../contexts/localeContext";

export default function useLang() {
  const { lang, spanish, english } = useContext(LocaleContext);

  return {
    lang,
    spanish,
    english,
  };
}
