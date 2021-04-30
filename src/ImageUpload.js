import React, {useState} from 'react'
import { Button } from "@material-ui/core";
import {storage, db} from './firebase'

function ImageUpload() {
const [image, setImage] = useState(null)
// const [url, setUrl] = useState('')
const [progress, setProgress] = useState((0))
const [caption, setCaption] = useState('')

const handleChange = (e) => {
    if (e.target.files[0]) {
        setImage(e.target.files[0])
    }
}

const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image)

    uploadTask.on(
        "state_changed",
        (snapshot) => {
            //progress function ...
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress)
        },
        (error) => {
            //Error function...
            console.log(error);
            alert(error.message)
        },
        () => {
            // complete function ...
            storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
        }
    )
}

    return (
        <div>
            <h1>Image uploader</h1>
            {/* I want to have the following */}
            {/* Caption input */}
            {/* File Picker */}
            {/* Post Button */}

            <input 
            type="text" 
            placeholder="Enter a Caption..." 
            value={caption} 
            onChange={event => setCaption(event.target.value)}
            />

            <input type="file" onChange={handleChange}
            />
            <Button onClick={handleUpload}>Upload</Button>
        </div>
    )
}

export default ImageUpload
