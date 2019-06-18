import React from 'react'
import ReduxDemo from './container/ReduxDemo';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {rootreducer} from './reducers/ReducerIndex'

const store = createStore(
  rootreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export const Index = () => {
  return (
    <div>
      <Provider store={store}>
        <ReduxDemo />
      </Provider>
    </div>
  )
}