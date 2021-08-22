import React from 'react';
import './App.less'
import { Provider } from "react-redux";
import store from "./state/redux/store"
import { AppRoutes } from './routing/AppRoutes';
import { AppStateProvider } from './state/contexts/appStateProvider'

function App() {
  return (
    <Provider store={store}>
      <AppStateProvider>
        <AppRoutes />
      </AppStateProvider>
    </Provider>
  );
}

export default App;
