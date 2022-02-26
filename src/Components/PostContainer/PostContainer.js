import { Avatar, ListItem, Paper } from "@material-ui/core";
import React, { Component } from "react";
import "./PostContainer.css";
import like from "../../images/images/like.png"
import postt from "../../images/images/post.jpeg"
import Post from "./post";
class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    getData = () => {
        let json = [
            {
                "postId": 1,
                "userId": 12345,
                "imageAvtar": "https://scontent.fyyc7-1.fna.fbcdn.net/v/t39.30808-1/cp0/p40x40/246711818_101811702303375_4629963323217477215_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=1eb0c7&_nc_ohc=zqOGPvowcxIAX_SN15t&tn=LRyV_Yl6yFzLTqYf&_nc_ht=scontent.fyyc7-1.fna&oh=00_AT8L3eWB4sn9GCkrZUdPzAe19nOAGUUa2kn6YMmKji_DGg&oe=61F53BFC",
                "text": "Akshat Sawraj",
                "postDesc": "Loved the wallpaper",
                "imagePost": "",
                "likeCount": "100"
            }
        ]
        this.setState({ data: json })
    }
    componentDidMount() {
        this.getData();
    }
    state = {}
    render() {
        return (
            <div>
                {
                    this.state.data.map((item) => (
                        <Post object={item} />
                    ))
                }
            </div>
        );
    }
}

export default PostContainer;