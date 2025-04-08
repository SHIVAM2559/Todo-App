// import { createContext, useContext, useState } from "react";

// export const ThemeContext = createContext({
//   themeMode: "light",
//   darkTheme: () => {},
//   lightTheme: () => {},
// });

// export const ThemeProvider = ({ children }) => {

//   const [themeMode, setThemeMode] = useState("light");

//   const darkTheme = () => setThemeMode("dark");
//   const lightTheme = () => setThemeMode("light");

//   return (
//     <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export default function useTheme() {
//   return useContext(ThemeContext);
// }
// // export const ThemeProvider=ThemeContext.Provider;

// // export default fumction useTheme(){
// //   return useContext(ThemeContext)
// // }
import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => setThemeMode("dark");
  const lightTheme = () => setThemeMode("light");

  // ✅ Apply class to <html> when themeMode changes
  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("dark", "light");
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useTheme() {
  return useContext(ThemeContext);
}
