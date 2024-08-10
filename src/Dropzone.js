import React from 'react'; 
import { useDropzone } from 'react-dropzone';

const Dropzone = () => { 
    function onDrop(acceptedFiles){ 
        console.log(acceptedFiles)
    }

    const { getRootProps, getInputProps } = useDropzone({  onDrop });

    console.log(getRootProps)



    return ( 
        <div className='dropzone-area' {...getRootProps()}> 
            <h1>drag and drop files here</h1>
            <p>or click to open file browser</p>
            <input {...getInputProps()}/>
        </div>
    )
}

export default Dropzone;