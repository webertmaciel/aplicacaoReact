import React, { useState } from 'react';
import './Todo.css';
import List from './List'
import TodoForm from './Form'
import Item from './Item'
function Todo() {



    const [items, setItems] = useState([])



    function onAddItem(text) {
        let it = new Item(text);
        setItems([...items, it]);
    }

    return (<div className="container">
        <h1>Todo</h1>
        <TodoForm onAddItem={onAddItem}></TodoForm>

        <List items={items}></List>

    </div>)


}




export default Todo;