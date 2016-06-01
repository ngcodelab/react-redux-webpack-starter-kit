import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import rootReducer from '../reducers/root_reducer';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk, promise, logger)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;
