import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useLayoutEffect, useState } from "react";

export const themeContext = createContext({
  darkMode: false,
  changeMode: (condition: boolean) => {},
  primaryBackground: "",
  secondaryBackground: "",
  primaryFont: "",
  primaryBorder: "",
});

interface provider {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: provider) {
  const [darkMode, setDarkMode] = useState(false);
  const changeMode = (condition: boolean) => {
    setDarkMode(condition);
  };

  const primaryBackground = darkMode ? "#23272A" : "white";
  const secondaryBackground = darkMode ? "#363C41" : "#EEEEEE";
  const primaryFont = darkMode ? "white" : "black";
  const primaryBorder = darkMode ? "#4B5563" : "#E5E7EB";

  useLayoutEffect(() => {
    const getMode = async () => {
      const mode = await AsyncStorage.getItem("darkMode");
      if (mode === "true") {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    };
    getMode();
  }, []);

  const value = {
    darkMode,
    changeMode,
    primaryBackground,
    secondaryBackground,
    primaryFont,
    primaryBorder,
  };

  return (
    <themeContext.Provider value={value}>{children}</themeContext.Provider>
  );
}
