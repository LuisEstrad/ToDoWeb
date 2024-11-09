import React from "react";
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ children }) {
    return ReactDOM.createPortal(
        <>
            <div className="ModalBackdrop"></div>
            <div className="ModalSpace">
                {children}
            </div>
        </>,
        document.getElementById('modal')
    );
}

export { Modal };

