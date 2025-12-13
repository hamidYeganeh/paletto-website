import enCommon from "./en/Common.json";
import enHome from "./en/Home.json";
import frCommon from "./fr/Common.json";
import frHome from "./fr/Home.json";

export const messagesByLocale = {
  en: {
    Common: enCommon,
    Home: enHome,
  },
  fr: {
    Common: frCommon,
    Home: frHome,
  },
} as const;

export const en = messagesByLocale.en;
export const fr = messagesByLocale.fr;
