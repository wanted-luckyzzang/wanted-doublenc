import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import modal from './modal';
import category from './category';
import brand from './brand';
import { ModalReduxState, ObjStringStyle } from 'src/types';

interface StateType {
  data: ObjStringStyle[];
}
export interface StoreState {
  modal: ModalReduxState;
  category: StateType | null;
  brand: StateType[] | null;
}

const rootReducer = combineReducers<StoreState>({ modal, category, brand });

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return state;
  }
  return rootReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const initStore = () => {
  return createStore(reducer, bindMiddleware([]));
};

export const wrapper = createWrapper(initStore);
