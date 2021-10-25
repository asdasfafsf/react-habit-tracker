import './app.css';
import Habits from './components/habits.jsx'
import React, { Component, useState } from 'react';
import Navbar from './components/navbar';


class App extends Component {
    state = {
      habits: [
          {
              id : 1,
              name: 'Reading',
              count: 0,
          },
          {
              id : 2,
              name: 'Running',
              count: 0,
          },
          {
              id : 3,
              name: 'Coding',
              count: 0,
          },
      ]
  }


  handleIncrement = (habit) => {
    const habits =  this.state.habits.map ( (element) => {
      if (element.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return element;
    });
    this.setState({habits});
  }
  handleDecrement = (habit) => {
    const habits =  this.state.habits.map ( (element) => {
      if (element.id === habit.id) {
        return { ...habit, count: habit.count < 1 ? 0 : habit.count - 1 };
      }
      return element;
    });
      this.setState({habits});
  }
  handleDelete = (habit) => {
      const habits =  this.state.habits.filter( (element) => {
          return element.id !== habit.id;
      });
      this.setState({habits});
  }

  handleAdd = (name) => {
    const habits = [...this.state.habits];

    habits.push({
      id: new Date().getTime(),
      name,
      count: 0,
    });

    this.setState({habits});
  }

  handleReset = () => {
    const habits = this.state.habits.map( (element) => {
      if (element.count !== 0) {
        return {...element, count: 0};
      }

      return element;
    });

    this.setState({habits});
  }

  render() {
    console.log('app');
    return (
      <>
      <Navbar totalCount= {this.state.habits.filter( element => element.count > 0).length}/>
      <Habits
        habits= {this.state.habits }
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
        onAdd={this.handleAdd}
        onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App