import React, { Component } from "react";
import ColumnList from "./ColumnList";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = { tasks: [] };

  addTask = (e) => {
    e.preventDefault();

    let { tasks } = this.state;
    const value = e.target.querySelector('input').value;
    const newTask = {
      id: tasks.length + 1,
      description: value,
      status: 'To Do'
    };
    tasks = tasks.concat(newTask);
    this.setState({ tasks });
  }
  updateTask = ( target, task) => {
    let {tasks } = this.state;
    tasks = tasks.filter(t => t.id !== task.id).concat({
    ...task,
    status: target.checked ? 'Done' : 'To Do'
  });
  this.setState({tasks});

  }
  render() {
    const { tasks = [] } = this.state;
    const columns = [
      { title: 'To Do', tasks },
      { title: 'Done', tasks }
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
                key={column.title}
                columnTitle={column.title}
                tasks={column.tasks}
                addTask={this.addTask}
                updateTask={this.updateTask}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
