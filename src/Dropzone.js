import React, { useState } from 'react'; 
import { useDropzone } from 'react-dropzone';
import ErrorModal from './ErrorModal';

const Dropzone = () => { 

    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null); 
    const [isModalOpen, setIsModalOpen] = useState(false)

    function onDrop(acceptedFile, rejectedFile){ 
        if (acceptedFile.length > 0){ 
            setFileName(acceptedFile[0].name) 
            setFile(acceptedFile)
            setErrorMessage(null)
        } else if (rejectedFile.length > 0) { 
            const error = "Invalid  file type. Please upload either a .pdf or .pdx file"
            setErrorMessage(error)
            setIsModalOpen(true)
        }
    }

    const closeModal = () => { 
        setIsModalOpen(false)
        setErrorMessage(null)
    }

    const { getRootProps, getInputProps } = useDropzone({  
        onDrop, 
        accept: { 
            'application/pdf': ['.pdf'], 
            'application/pdx': ['.pdx']
        },
        multiple: false
     });

    return ( 
        <div className='dropzone-area' {...getRootProps()}> 
            <input {...getInputProps()}/>
            <div className='dropzone-area-text'>
                {fileName ? <p>{fileName}</p> : <div><h1>Drag and drop files here</h1><p>-or click to use file browser-</p></div>}
            </div>
        </div>
    )
}

export default Dropzone;