import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import ReduxLogger from 'redux-logger'
import RootReducer from './reducers/index';

export const middlewares = [ReduxThunk,ReduxLogger]

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)


export const store = createStoreWithMiddleware(RootReducer)