import React from "react";

// TODO: Change this into Context Hooks State Management
const useTheme = () => {
  let _getTheme: string = "";

  const [theme, toggleTheme] = React.useState<boolean>(
    _getTheme === "LIGHT" || _getTheme === ""
  ); //true == LightTheme

  React.useEffect(() => {
    if (typeof window !== undefined) {
      _getTheme = window.localStorage.getItem("theme") ?? "";
      if (_getTheme === "") {
        window.localStorage.setItem("theme", "LIGHT");
      }
    }
    return () => {};
  }, [theme]);

  return [theme, toggleTheme] as const;
};

export default useTheme;
