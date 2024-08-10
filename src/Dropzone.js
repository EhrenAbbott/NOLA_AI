import React, { useState } from 'react'; 
import { useDropzone } from 'react-dropzone';

const Dropzone = () => { 

    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState(null);

    function onDrop(acceptedFile){ 
        setFileName(acceptedFile[0].name) 
        setFile(acceptedFile)
    }

    const { getRootProps, getInputProps } = useDropzone({  onDrop });

    console.log(fileName)





    return ( 
        <div className='dropzone-area' {...getRootProps()}> 
            <h1>drag and drop files here</h1>
            <p>or click to open file browser</p>
            <input {...getInputProps()}/>
            {fileName && <p>{fileName}</p>}
        </div>
    )
}

export default Dropzone;