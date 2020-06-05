import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, compose } from 'redux';

import createRootReducer from './reducers';

// for extension in Chrome
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const store = createStore(
	createRootReducer(history),
	composeEnhancers(applyMiddleware(routerMiddleware(history)))
);

export default store;
