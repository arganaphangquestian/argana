import { stat } from "fs";
import React from "react";

type Action = { type: "toggle" } | { type: "light" } | { type: "dark" };
type Dispatch = (action: Action) => void;
type State = { isLightTheme: boolean };
type ThemeAppProviderProps = { children: React.ReactNode };

const ThemeAppStateContext = React.createContext<State | undefined>(undefined);
const ThemeAppDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

function themeAppReducer(state: State, action: Action) {
  switch (action.type) {
    case "toggle": {
      return {
        isLightTheme: !state.isLightTheme,
      };
    }
    case "light": {
      return {
        isLightTheme: true,
      };
    }
    case "dark": {
      return {
        isLightTheme: false,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ThemeAppProvider({ children }: ThemeAppProviderProps) {
  const [state, dispatch] = React.useReducer(themeAppReducer, {
    isLightTheme: undefined,
  });
  React.useEffect(() => {
    if (typeof window !== undefined) {
      let theme = window.localStorage.getItem("theme") ?? "";
      dispatch({ type: theme === "DARK" ? "dark" : "light" });
    }
  }, []);
  React.useEffect(() => {
    if (typeof window !== undefined) {
      window.localStorage.setItem(
        "theme",
        state.isLightTheme ? "LIGHT" : "DARK"
      );
    }
  }, [state]);
  return (
    <ThemeAppStateContext.Provider value={state}>
      <ThemeAppDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeAppDispatchContext.Provider>
    </ThemeAppStateContext.Provider>
  );
}

function useThemeAppState() {
  const context = React.useContext(ThemeAppStateContext);
  if (context === undefined) {
    throw new Error(`useThemeAppState must be used within a ThemeAppProvider`);
  }
  return context;
}

function useThemeAppDispatch() {
  const context = React.useContext(ThemeAppDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useThemeAppDispatch must be used within a ThemeAppProvider"
    );
  }
  return context;
}

function useThemeApp() {
  return [useThemeAppState(), useThemeAppDispatch()] as const;
}
export { ThemeAppProvider, useThemeApp, useThemeAppState, useThemeAppDispatch };
