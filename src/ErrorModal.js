import React from 'react'; 
import Modal from 'react-modal';

Modal.setAppElement('#root')

const ErrorModal = ({isOpen, onRequestClose, message}) => { 
    return( 
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Error Message"
            className='error-modal'
        >
            <h2>{message}</h2>
            <button onClick={onRequestClose}>Close</button>
        </Modal>
    )
}


export default ErrorModal