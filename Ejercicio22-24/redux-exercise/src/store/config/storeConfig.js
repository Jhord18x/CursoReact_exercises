import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers/rootReducer';

export const createAppStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    composeWithDevTools,
  });

  return store;
};
