import {createStore} from 'redux'
import {Provider} from 'react-redux'
import React from 'react'
import App from './App'
import red from './reducer'

var store = createStore(red);

export default class About extends React.Component{
  render() {
    return(
	<div>
      <Provider store = {store}>
        <App />
      </Provider>
	  </div>
    )
  }
}