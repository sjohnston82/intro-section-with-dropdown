import React, {
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect
} from "react";
import { getWindowSize } from "../utils";

type ContextType = {
  navOpen: boolean;
  setNavOpen: Dispatch<SetStateAction<boolean>>;
  windowSize: { innerWidth: number; innerHeight: number };
  setWindowSize: Dispatch<
    SetStateAction<{ innerWidth: number; innerHeight: number }>
  >;
};

type ChildrenProps = {
  children: JSX.Element | JSX.Element[];
};

// function getWindowSize() {
  
//   const { innerWidth, innerHeight } = window;
//   return { innerWidth, innerHeight };
// }

const Context = createContext<ContextType | null>(null);

const ContextProvider = ({ children }: ChildrenProps) => {
  const [navOpen, setNavOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Context.Provider
      value={{
        navOpen,
        setNavOpen,
        windowSize,
        setWindowSize,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export function useIntroContext() {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useIntroContext must be uses within a ContextProvider");
  }
  return context;
}

export default ContextProvider;
