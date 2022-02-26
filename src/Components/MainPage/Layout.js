import React,{Component} from "react";
import "./MainPage.css";
import Grid from '@material-ui/core/Grid';
import LeftSide from "../LeftSidePanel/LeftSide";
import StatusBar from "../StatusBar/StatusBar";
import UploadSection from "../UploadSection/UploadSection";
import PostContainer from "../PostContainer/PostContainer";
import RightSidePanel from "../RightSidePanel/RightSidePanel";
class Layout extends Component {
    constructor(props) {
        super(props);
    
    }
    letUpdate =() =>{
        this.refs.child.getData();
    }

    state = {  }
    render() { 
        return (  
            <div className="mainpage_container">
                <Grid container>
                <Grid item xs={3} >
                    <LeftSide/>
                </Grid>
                <Grid item xs={6} className="middleContainer">
                    <StatusBar/>
                    <UploadSection  update={this.letUpdate}/>
                    <PostContainer ref="child"/>
                    
                    

                </Grid>
                <Grid item xs={3} >
                    <RightSidePanel/>
                </Grid>
                </Grid>
             </div>

        );
    }
}
 
export default Layout;