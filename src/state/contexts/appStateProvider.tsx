import React, {
  useReducer,
  FC,
  useState,
  useEffect
} from "react";
import { loginContext } from "./loginContext/login.reducer";
import { GlobalContextProvider } from "./contexts";

type AppStateProvider = {
  children: JSX.Element;
}

export const AppStateProvider: FC<AppStateProvider> = ({ children }) => {

  const [state, dispatch] = useReducer(loginContext.counterReducer, loginContext.initialCounterState);

  const [isMobileLocal, setIsMobileLocal] = useState(false);

  const updateIfMobile = () => {
    const ifMobile = window.innerWidth < 768 ? true : false;
    setIsMobileLocal(ifMobile);
  };

  useEffect(() => {
    updateIfMobile();
    window.addEventListener("resize", updateIfMobile);
  }, [isMobileLocal]);

  return (
    <GlobalContextProvider value={{ login: state, isMobile: isMobileLocal }}>
      {children}
    </GlobalContextProvider>
  )
}