import React, { useState } from 'react'; 
import { useDropzone } from 'react-dropzone';

const Dropzone = () => { 

    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState(null);

    function onDrop(acceptedFile, rejectedFile){ 
        if (acceptedFile.length > 0){ 
            setFileName(acceptedFile[0].name) 
            setFile(acceptedFile)
        } else if (rejectedFile.length > 0) { 
            const error = "invalid type"
            console.log("rejectedFile")
            alert(error)
        }
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
            {fileName ? <p>{fileName}</p> : <h1>drag and drop files here</h1>}
        </div>
    )
}

export default Dropzone;