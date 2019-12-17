const COLORS = {
  white: "#ffffff",
  black: "#000000",
  green: "#61a58b" // dutchie green
};

export default COLORS;


































































// requires input from Product
export const DARK_MODE_COLORS = {
  ...COLORS,
  white: "#000000",
  black: "#ffffff",
  green: "#61a58b"
};



































































// just add a single piece of state to UI.js
// @observable themeName = 'darkMode';
export const colors = (themeName = "default") => {
  const themes = {
    default: COLORS,
    darkMode: DARK_MODE_COLORS,
    custom: CUSTOM_COLORS
  };
  return themes[themeName] || themes.default;
};
