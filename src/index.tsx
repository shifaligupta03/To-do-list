import * as React from "react";
import * as ReactDOM from "react-dom";
import { Route } from "react-router";
import { createStore, applyMiddleware } from "redux";
import { ConnectedRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import App from "./components/app";
import { ToDoPage } from "./pages/todo";
import { rootReducer } from "./reducers";
import { loadState, saveState } from "./libs/local-storage";

const persistedState = loadState();

const history = createBrowserHistory();
const store = createStore(
  rootReducer(history),
  persistedState,
  applyMiddleware(routerMiddleware(history))
);

store.subscribe(() => {
  saveState({
    todo: store.getState().todo
  });
});

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
