import React, {
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { getWindowSize } from "../utils";

type ContextType = {
  navOpen: boolean;
  setNavOpen: Dispatch<SetStateAction<boolean>>;
  featuresOpen: boolean;
  setFeaturesOpen: Dispatch<SetStateAction<boolean>>;
  companyOpen: boolean;
  setCompanyOpen: Dispatch<SetStateAction<boolean>>;
  windowSize: { innerWidth: number; innerHeight: number };
  setWindowSize: Dispatch<
    SetStateAction<{ innerWidth: number; innerHeight: number }>
  >;
  closeMenus: () => void;
};

type ChildrenProps = {
  children: JSX.Element | JSX.Element[];
};

const Context = createContext<ContextType | null>(null);

const ContextProvider = ({ children }: ChildrenProps) => {
  const [navOpen, setNavOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const closeMenus = () => {
    if (companyOpen) {
      setCompanyOpen(false);
    }
    if (featuresOpen) {
      setFeaturesOpen(false);
    }
  };

  return (
    <Context.Provider
      value={{
        navOpen,
        setNavOpen,
        windowSize,
        setWindowSize,
        featuresOpen,
        setFeaturesOpen,
        companyOpen,
        setCompanyOpen,
        closeMenus,
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
