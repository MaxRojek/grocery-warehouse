import React, {
  createContext,
  Context,
  Consumer,
  Dispatch,
  SetStateAction,
  Provider,
  useContext,
} from "react";

import { loginContext } from "./loginContext/login.reducer";

// export type GlobalContext = Context<GlobalContextDispatchers>;
// type GlobalContextConsumer = Consumer<GlobalContextDispatchers>;
// type GlobalContextProvider =  Provider<GlobalContextDispatchers>;


// export type counterDispatcher = [State, React.Dispatch<Action>];

// export interface GlobalContextDispatchers {
//   counter: counterDispatcher; 
// }


// export interface GlobalContextValues {
//   counter: number
// }


// export const globalStateContext: GlobalContext = createContext<
//   GlobalContextDispatchers
// >((initGlobalContextValues as unknown) as GlobalContextDispatchers);



// export const GlobalContextConsumer: GlobalContextConsumer =
//    globalStateContext.Consumer;
// export const GlobalContextProvider: GlobalContextProvider =
//    globalStateContext.Provider;



export const MyGlobalContext = createContext({
  login: loginContext.initialCounterState
});

export const GlobalContextValues = {
  login: loginContext.initialCounterState
}

export const useGlobalContext = () => useContext(MyGlobalContext);

export const GlobalContextConsumer = MyGlobalContext.Consumer;
export const GlobalContextProvider = MyGlobalContext.Provider;