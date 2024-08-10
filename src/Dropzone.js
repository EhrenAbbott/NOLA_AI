import React, { useState } from 'react'; 
import { useDropzone } from 'react-dropzone';

const Dropzone = () => { 

    const [files, setFiles] = useState([])

    function onDrop(acceptedFiles){ 
        setFiles(acceptedFiles) 
        console.log("files", files)
    }

    const { getRootProps, getInputProps } = useDropzone({  onDrop });





    return ( 
        <div className='dropzone-area' {...getRootProps()}> 
            <h1>drag and drop files here</h1>
            <p>or click to open file browser</p>
            <input {...getInputProps()}/>
        </div>
    )
}

export default Dropzone;