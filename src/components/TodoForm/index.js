import React from "react";
import './TodoForm.css';
import { Context } from "../../context";

function TodoForm() {

    const {
        addTodo,
        setOpenModal,

    } = React.useContext(Context);

    const [newValue, setNewValue] = React.useState('');

    const onSubmit =  (event) => {
        event.preventDefault();
        addTodo(newValue);
        setOpenModal(false);
    }  

    const onCancel =  () => {
        setOpenModal(false);
    }  

    const onChange = (event) => {
        setNewValue(event.target.value)
    }

    return(
        <form onSubmit={onSubmit} >
            <label>Write your task</label>
            <div className="buttonContainer">
            <textarea placeholder="Write here" value={newValue} onChange={onChange} requiered/>
                <button type="submit" className="addButton">Add</button>
                <button type="button" className="cancelButton" onClick={onCancel} >Cancel</button>
            </div>
        </form>
    )
}

export { TodoForm };