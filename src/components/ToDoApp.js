import React from 'react';
import List from './List';
import Input from './Input'

export default class ToDoApp extends React.Component{

  componentWillMount (){
    this.setState({
      list:['thing1','thing2','thing3']
    })
  }

  onInputChange = (event) => {
    this.props.inputChange(event.target.value)
  }

  onInputSubmit = (event) => {
    event.preventDefault();
    this.props.inputSubmit();
  }

  onListItemClick = (i) => {
    this.props.listItemClick(i);
  }

  deleteListItem = (i) => {
    this.props.deleteListItem(i);
  }

  render () {
    return (
      <div>
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className="panel panel-default">
              <div className="panel-body">
                <h1>My To Do App</h1>
                <hr/>
                <List listItems={this.props.toDoApp.list} onClick={this.onListItemClick} delelteListItem={this.deleteListItem}/>
              </div>
            </div>
          </div>
        </div>
        <Input onChange={this.onInputChange} onSubmit={this.onInputSubmit()} value={this.props.toDoApp.newToDo}/>
      </div>
    );
  }
}