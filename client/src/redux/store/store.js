import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducer/rootReducer'
import thunkMiddleware from 'redux-thunk'

export const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
