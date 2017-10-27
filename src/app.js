import $ from 'jquery'
import React from 'react'
import ReactDOM  from 'react-dom'


import ToDoApp from './components/ToDoApp.js'

class App extends React.Component{
  render () {
    return (
      <ToDoApp />
    );
  }
}


ReactDOM.render(<App />,$('#app')[0])