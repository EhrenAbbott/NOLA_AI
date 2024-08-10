import React from 'react'; 
import { useDropzone } from 'react-dropzone';

const Dropzone = () => { 
    function onDrop(acceptedFiles){ 
        console.log(acceptedFiles)
    }

    const { getRootProps, getInputProps } = useDropzone({  onDrop });



    return ( 
        <div> 
            <h1>dropzone component</h1>
        </div>
    )
}

export default Dropzone;