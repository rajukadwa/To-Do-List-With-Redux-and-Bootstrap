import {createStore} from 'redux'
import {Provider} from 'react-redux'
import React from 'react'
import App from './App'
import red from './reducer'

var store = createStore(red);

export default class Main extends React.Component{
  render() {
    return(
      <Provider store = {store}>
        <App />
      </Provider>
    )
  }
}
