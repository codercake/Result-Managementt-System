import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';

const Admin = () => {
    const [file, setFile] = useState(null);
    const onDrop = (acceptedFiles) => {
        setFile(acceptedFiles[0]);
    };

    const uploadFile = async () => {
        const formData = new FormData();
        formData.append('file', file);
        await axios.post('http://localhost:5000/api/results/upload', formData);
        alert('File uploaded successfully');
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div>
            <h1>Admin Panel</h1>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <button onClick={uploadFile}>Upload Results</button>
        </div>
    );
};

export default Admin;
