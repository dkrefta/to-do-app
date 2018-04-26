import React, { Component } from 'react';
import ColumnList from './ColumnList'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { tasks: [] };

  addTask = () => console.log ('aqui')
  updateTask = () => console.log ('aqui')
  render() {
    const { tasks = [] } = this.state;
    const columns = [
      {title: 'To Do', tasks},
      {title: 'Done', tasks}
    ];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> To-Do List</h1>
        </div>
        <div className="App-container">
        <div className="app-lists">
        {columns.map(column => (
                <ColumnList
                key ={column.title}
                columnTitle={column.title}
                tasks = {column.tasks}
                />
        ))}

        </div>
      </div>
      </div>
    );
  }
}

export default App;
