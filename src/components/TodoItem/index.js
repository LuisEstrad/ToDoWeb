import './TodoItem.css';

function TodoItem(props) {
    return (
        <li >
            <button className={`complete ${props.completed ? 'completed' : ''}`} onClick={props.onComplete}></button>
            <p className={props.completed ? 'completed-text' : ''}>{props.text}</p>
            <button className="delete" onClick={props.onDelete}></button>
        </li>
    );
}

export { TodoItem };
