const lang = typeof window === "undefined" ? "en-US" : navigator.language;

export const numberFmt = {
  proc: new Intl.NumberFormat(lang, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 2,
  }),
};
