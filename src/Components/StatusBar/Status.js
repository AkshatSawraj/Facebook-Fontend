import { Paper } from "@material-ui/core";
import React, { Component } from "react";
import "./StatusBar.css";
import uploadIcon from "../../images/images/upload.png";
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


class Status extends Component {
    constructor(props) {
        super(props);
        const firebaseConfig = {
            apiKey: "AIzaSyC1xUTfBZWwfIlp4wavM0vntMZeMZH_iUs",
            authDomain: "facebook-clone-fee14.firebaseapp.com",
            projectId: "facebook-clone-fee14",
            storageBucket: "facebook-clone-fee14.appspot.com",
            messagingSenderId: "672840784520",
            appId: "1:672840784520:web:07a0aebcd7d187e7175d3d"
        };
        const app = initializeApp(firebaseConfig);
    }
    state = {}


    openDialogToUploadStatus = (event) => {

        let image=event.target.files[0];

        if(image==undefined || image==null)
            return;
            
        const thisContext=this;

        
        const storage = getStorage();
        const storageRef = ref(storage, image.name);

        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on('state_changed',
            (snapshot) => {
                
            },
            (error) => {
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);

                    let payload = {
                        "userID": JSON.parse(localStorage.getItem("user")).userID,
                        "username": JSON.parse(localStorage.getItem("user")).userName,
                        "statusImageURL" : downloadURL
    
                    }
        
                    const requestOptions ={
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        body : JSON.stringify(payload),
                    };
        
                    fetch("http://localhost:8080/api/statusService/save",requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        thisContext.props.refresh();
                        
                    })
                    .catch(error =>{
        
                    })

                });
            }
        );


    }
    
    



    render() {
        return (
            <div>
            {
                this.props.uploader == "true" ?

                <Paper className="statusbar__status">
                    <label for="file-upload-status" className="upload__tabs">
                        <img src={uploadIcon} className="upload__icon" />
                        </label>
                       <input type="file" id="file-upload-status" onChange={this.openDialogToUploadStatus} />

                </Paper>:

                <Paper className="statusbar__status">
                    <img src={this.props.object.statusImageURL} className="status__image" />       
                </Paper>


            }
             
        </div>
        );
    }
}

export default Status;