import React, { useState } from 'react'; 
import { useDropzone } from 'react-dropzone';

const Dropzone = () => { 

    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState(null);

    function onDrop(acceptedFile){ 
        setFileName(acceptedFile[0].name) 
        setFile(acceptedFile)
    }

    const { getRootProps, getInputProps } = useDropzone({  
        onDrop, 
        accept: { 
            'application/pdf': ['.pdf'], 
            'application/pdx': ['.pdx']
        },
        multiple: false
     });

    console.log(fileName)





    return ( 
        <div className='dropzone-area' {...getRootProps()}> 
            <input {...getInputProps()}/>
            {fileName ? <p>{fileName}</p> : <h1>drag and drop files here</h1>}
        </div>
    )
}

export default Dropzone;