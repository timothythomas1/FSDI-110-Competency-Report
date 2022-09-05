
import { React, useState } from 'react'
import './ShoppingList.css'
// To-Do List from : 
// https://mdbootstrap.com/docs/standard/extended/to-do-list/
const ShoppingList = () => {
    const [todo, setTodo] = useState([]);
    const [text, setText] = useState('');
    // const [id_, setId] = useState('');

    const textChange = (e) => {
        let value = e.target.value; //This is how we read the value in an input field in REACT for onChange events in this case
        setText(value); // This is how we store the value in an input field in REACT for onChange events in this case
    }

    const save = () => {
        console.log(text);
        // create a copy, modify copy, set copy
        let clone = [...todo];
        clone.push(text);
        setTodo(clone);
    }

    return (
        <div className="shop-list">
            <form >
                <label>Add to list:</label>
                <input
                    onChange={textChange}
                    type="text"
                    value={text}
                />

                <button id="addTask" type='button' onClick={save}>Add</button>
            </form>
            <ul>
                {
                    todo.map((todo, index) => (<li key={index} > {text}</li>))
                }
            </ul>
        </div >
    );

}

export default ShoppingList