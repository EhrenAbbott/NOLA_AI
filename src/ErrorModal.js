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
            <h3 className='modal-header'>Invalid file type</h3>
            <p className='modal-message'>{message}</p>
            <button className='modal-button' onClick={onRequestClose}>Close</button>
        </Modal>
    )
}


export default ErrorModal