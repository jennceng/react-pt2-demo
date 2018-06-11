import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

const store = configureStore();

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const container = document.getElementById("root");

ReactDOM.render(<Root store={store}/>, container);

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => {
    ReactDOM.unmountComponentAtNode(container);
  });
}
