import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {
    return (
        <button className="add" 
                onClick={
                    () => {
                        setOpenModal(state => !state);
                    }
                }
        ></button>
    );
}

export { CreateTodoButton };
