import React, { useState, useEffect } from 'react';
import List from './components/List'
import Item from './components/Item'
import Modal from './components/Modal'
import TodoForm from './components/Form'
import './Todo.css';

const SAVED_ITEMS = "savedItems"


function Todo() {

    const [showModal, setShowModal] = useState(false)

    const [items, setItems] = useState([])

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
        if (savedItems) {
            setItems(savedItems);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))

    }, [items])



    function onAddItem(text) {
        let it = new Item(text);
        setItems([...items, it]);
    }
    function onItemDelete(item) {
        let filteredItems = items.filter(it => it.id != item.id);
        setItems(filteredItems);
    }

    function onDone(item) {
        let updatedItems = items.map(it => {
            if (it.id === item.id) {
                it.done = !it.done;
            } return it;
        })

        setItems(updatedItems);
    }



    return (<div className="container">
        <header className='header'><h1>Todo</h1> <button className='addButton'>+</button></header>
        {/*  */}

        <List onDone={onDone} onItemDelete={onItemDelete} items={items}></List>
        <Modal showModal={showModal}>
            <TodoForm onAddItem={onAddItem}></TodoForm>
        </Modal>

    </div>)


}




export default Todo;