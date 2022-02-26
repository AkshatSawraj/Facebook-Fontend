import { Avatar, Paper } from "@material-ui/core";
import React, { Component } from "react";
import "./UploadSection.css";
import live from "../../images/images/video.png"
import image from "../../images/images/image.png"
import feeling from "../../images/images/feelings.png"
import Dialog from '@material-ui/core/Dialog';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { ThemeProvider } from "@mui/material";

class UploadSection extends Component {
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
        this.state = {
            open: false,
            uploadImage: null,
            description: null
        }
    }
    handleClose = () => {
        this.setState({ open: false });
    }

    openDialog = (event) => {
        this.setState({ open: true });
        this.setState({ uploadImage: URL.createObjectURL(event.target.files[0]) });
        this.setState({ image: event.target.files[0] });
    }

    uploadToFireBase = () => {
        const thisContext=this;

        const storage = getStorage();
        const storageRef = ref(storage, this.state.image.name);

        const uploadTask = uploadBytesResumable(storageRef, this.state.image);

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
                        "description": thisContext.state.description,
                        "postImgURL" : downloadURL
    
                    }
        
                    const requestOptions ={
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        body : JSON.stringify(payload),
                    };
        
                    fetch("http://localhost:8080/api/postService/save",requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        thisContext.setState({open: false});
                        thisContext.props.update();
                        
                    })
                    .catch(error =>{
        
                    })

                });
            }
        );


    }

    state = {}
    render() {
        return (
            <div>
                <Dialog aria-labelledby="simple-dialog-title" className="upload__dialogbox" open={this.state.open}>
                    <div className="upload__header">
                        <div className="upload__text">Create Post</div>
                        <div className="upload__close"><span onClick={this.handleClose}>X</span></div>
                    </div>
                    <input type="text" onChange={(event) => this.state.description = event.currentTarget.value} className="upload__textbox" placeholder="What's on your mind" />
                    <img src={this.state.uploadImage} className="upload__preview" />
                    <input type="button" value="Post" onClick={this.uploadToFireBase} className="upload__button" />
                </Dialog>

                <Paper className="upload_container" >
                    <div className="upload_top">
                        <div>
                            <Avatar src="https://scontent.fyyc7-1.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/67307284_2168539693256503_4777409917113860096_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=_guQKiPlBKUAX8EaFIZ&_nc_ht=scontent.fyyc7-1.fna&oh=00_AT9oodacQU-uk0dlKnpXXcXg-Jckjnn3jbmJP-YUwasgYw&oe=621479C9" className="upload_img" />
                        </div>
                        <div>
                            <input className="upload_box" type="text" placeholder="What's on your mind?" />

                        </div>
                    </div>
                    <div className="upload_bottom">
                        <div className="upload_tabs">
                            <img src={live} width="35px" />
                            <div className="upload_text"> Live Video</div>
                        </div>
                        <div className="upload_tabs" >
                            <label for="file-upload" className="upload_tabs">
                                <img src={image} width="35px" />
                                <div className="upload_text"> Photo/Video</div>
                            </label>
                            <input type="file" id="file-upload" onChange={this.openDialog} />
                        </div>
                        <div className="upload_tabs">
                            <img src={feeling} width="35px" />
                            <div className="upload_text"> Feeling/Activity</div>

                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default UploadSection;