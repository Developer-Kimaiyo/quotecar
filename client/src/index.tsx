import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Routes from "./routes";
import * as serviceWorker from "./serviceWorker";
import BackTop from "./components/ScrollToTop";

// External CSS import here
import "antd/dist/antd.css";
import { GlobalStyle } from "./styles/global.style";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <BackTop></BackTop>
      </ThemeProvider>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
