import * as React from "react";
import * as ReactDOM from "react-dom";
import { Route } from "react-router";
import { createStore, applyMiddleware } from "redux";
import { ConnectedRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import App from "./components/App/App.container";
import { ToDoPage } from "./pages/todoPage";
import { rootReducer } from "./reducers";

const history = createBrowserHistory();
const store = createStore(
  rootReducer(history),
  applyMiddleware(routerMiddleware(history))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Route exact path="/" component={ToDoPage} />
      </App>
    </ConnectedRouter>
  </Provider>,
  document.querySelector(".container")
);
