import React, {
  useReducer,
  FC
} from "react";
import { loginContext } from "./loginContext/login.reducer";
import { GlobalContextProvider } from "./contexts";

type AppStateProvider = {
  children: JSX.Element;
}

export const AppStateProvider: FC<AppStateProvider> = ({ children }) => {

  const [state, dispatch] = useReducer(loginContext.counterReducer, loginContext.initialCounterState);

  return (
    <GlobalContextProvider value={{ login: state }}>
      {children}
    </GlobalContextProvider>
  )
}