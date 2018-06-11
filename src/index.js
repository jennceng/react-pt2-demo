import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const container = document.getElementById("root");

ReactDOM.render(<Root />, container);

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => {
    ReactDOM.unmountComponentAtNode(container);
  });
}
