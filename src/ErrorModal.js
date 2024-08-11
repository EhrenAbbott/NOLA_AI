import React from 'react'; 
import Modal from 'react-modal';

Modal.setAppElement('#root')

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      backgroundColor: 'darkgray',
      boxShadow: '10px 5px 5px gray', 
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      maxWidth: '300px',
      borderRadius: '5px',
      margin: '30px auto',
      alignItems: 'center',
      outline: 'none',
    },
  };

function ErrorModal({isOpen, onRequestClose, message}) { 
    return( 
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Error Message"
            className='error-modal'
            style={customStyles}
        >
            <h3 className='modal-header'>Error:</h3>
            <p className='modal-message'>{message}</p>
            <button className='modal-button' onClick={onRequestClose}>Close</button>
        </Modal>
    )
}


export default ErrorModal