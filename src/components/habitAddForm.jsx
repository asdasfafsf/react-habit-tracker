import React, { memo } from 'react';



const HabitAddForm = memo( props => {
    const inputRef = React.createRef();
    
    const onSubmit = event => {
        event.preventDefault();
    
        const name = inputRef.current.value;
    
        if (!name) {
            alert('이름 입력하세요');
        }
        name && props.onAdd(name);
        inputRef.current.value = '';
    };
    
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <input ref={inputRef} type="text" className="add-input" placeholder="Habit"/>
            <button className="add-button"></button>
        </form>
    );}
)
export default HabitAddForm;
