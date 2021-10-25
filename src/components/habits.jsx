import React, { Component } from 'react'
import Habit from './habit';
import HabitAddForm from './habitAddForm';


class Habits extends Component {
    render() {
        console.log('habits');
        return (  
            <>
            <HabitAddForm onAdd={this.props.onAdd}/>
            <ul>
                {
                    this.props.habits.map (element => 
                        <Habit key={element.id} habit={element} 
                            onIncrement={this.props.onIncrement} 
                            onDecrement={this.props.onDecrement}
                            onDelete={this.props.onDelete}
                            onAdd={this.props.onAdd}
                        />
                    )
                }
            </ul>
            <button className="habits-reset" onClick={this.props.onReset}>Reset</button>
            </>
        )
    }

}


export default Habits;