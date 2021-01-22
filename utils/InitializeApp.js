import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import ReduxThunk from 'redux-thunk'

import rootReducer from '../reducers';

export const InitializeApp = () => {
     /* ------------- Redux Configuration ------------- */
  const middleware = []
  const enhancers = []

  /* ------------- ReduxThunk Middleware ------------- */
  middleware.push(ReduxThunk)

  /* ------------- Redux Logger Middleware ------------- */
  // Note: logger must be the last middleware in chain, otherwise it will log
  // thunk and promise, not actual actions.
  function noop() { }

  const { createLogger } = require('redux-logger')
  const logger = createLogger({ collapsed: true, duration: true, diff: true })
  middleware.push(logger)

  console.log = noop;
  console.warn = noop;
  console.error = noop;

    /* ------------- Assemble Middleware ------------- */
    const middlewareEnhancer = applyMiddleware(...middleware)
    enhancers.push(middlewareEnhancer)
  
    const persistConfig = {
      key: 'REDUX_OFFLINE_STORE',
      whitelist: []
    }
  
    const persistedReducer = persistReducer(persistConfig, rootReducer)
    const store = createStore(persistedReducer, {}, compose(...enhancers))
    const persistor = persistStore(store)
  
    return { store, persistor }
}