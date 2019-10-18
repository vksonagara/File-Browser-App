import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import Header from "./components/Header";
import FileContent from "./components/FileContent";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CssBaseline />
        <Header />
        <FileContent />
      </div>
    </Provider>
  );
}

export default App;
