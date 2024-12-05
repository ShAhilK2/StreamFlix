import React from "react";

import AppLayout from "./components/AppLayout";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <AppLayout />
    </Provider>
  );
}

export default App;
