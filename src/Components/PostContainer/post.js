import { Avatar, Paper } from "@material-ui/core";
import React, { Component } from "react";
import "./PostContainer.css";
import like from "../../images/images/like.png"
import likeBut from "../../images/images/likebutton.png"
import com from "../../images/images/comment.png"
import share from "../../images/images/share.png"


import postt from "../../images/images/post.jpeg"
class Post extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
isImageAvailable=(data)=>{
    return data===""?false:true;
}

    render() {
        return (
            <div>
                <Paper className="post_container">
                    {/* header */}
                    <div className="post_header">
                        <div className="post_header_img">
                            <Avatar className="post_img" src={this.props.object.imageAvtar} />
                        </div>
                        <div className="post_header_text">
                            {this.props.object.text}
                        </div>
                    </div>
                    {/* description */}
                    <div className="post_description">
                        {this.props.object.postDesc}
                    </div>
                    {/* image */}
                    <div className="post_image">
                        {
                            this.isImageAvailable(this.props.object.imagePost) ? <img src={this.props.object.imagePost} width="600px" /> : <span></span>
 
                        }
                    </div>
                    {/* like count */}
                    <div className="post_likecountContainer">
                        <div className="post_like">
                            <img className="post_img" src={like} />
                        </div>
                        <div className="post_likecount">
                            {this.props.object.likeCount}
                        </div>
                    </div>
                    {/* like share box */}
                    <div className="sharebox_container">
                        <div className="like_tab">
                            <div className="tab_first">
                                <img className="tab_img" src={likeBut} />
                            </div>
                            <div className="tab_text">
                                Like
                            </div>
                        </div>
                        <div className="like_tab">
                            <div className="tab_first">
                                <img className="tab_img" src={com} />
                            </div>
                            <div className="tab_text">
                                Comment
                            </div>
                        </div>
                        <div className="like_tab">
                            <div className="tab_first">
                                <img className="tab_img" src={share} />
                            </div>
                            <div className="tab_text">
                                Share
                            </div>
                        </div>

                    </div>
                    
                </Paper>
            </div>);
    }
}

export default Post;