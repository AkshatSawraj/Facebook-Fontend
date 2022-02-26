import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import fblogo from "../../images/images/logo.png";
import "./NavBar.css";
import Avtar from '@material-ui/core/Avatar';


class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (<div>
            <Grid container className="navbar_main" >
                <Grid item xs={3} >
                    <div className="navbar_leftbar" >
                        <img className="navbar_logo" src={fblogo} width='35px' />
                        <input type="text" placeholder='🔍  Search Facebook' className="navbar_search" />
                    </div>
                </Grid>
                <Grid item xs={6} >
                    < div className="navbar_container" >
                        <div className="navbar_tabs active"  >
                            <img src="https://img.icons8.com/ios/50/000000/home--v1.png" height="30px" width="30px" className='img' />

                        </div>
                        <div className="navbar_tabs" >
                            <img src="https://img.icons8.com/ios/50/000000/tv-show.png" height="30px" width="30px" className='img'/>
                        </div>
                        <div className="navbar_tabs">
                            <img className='img' src="https://img.icons8.com/external-others-iconmarket/64/000000/external-marketplace-black-friday-others-iconmarket.png" height="30px" width="40px" />
                        </div>
                        <div className="navbar_tabs">
                            <img className='img' src="https://img.icons8.com/material-sharp/24/000000/conference-call.png" height="30px" width="30px" />
                        </div>
                        <div className="navbar_tabs">

                        </div>
                    </div>
                </Grid>
                <Grid item xs={3} >
                    <div className="navbar_right">
                        <div className="navbar_righttab">
                            <Avtar className="navbar_rightimg" src="https://scontent.fyyc7-1.fna.fbcdn.net/v/t1.6435-1/cp0/p50x50/67307284_2168539693256503_4777409917113860096_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=_guQKiPlBKUAX8EaFIZ&_nc_ht=scontent.fyyc7-1.fna&oh=00_AT8WGf-6VDpNmI4bxyeW9yXTup6orwZq0whl7ENhdGDd4w&oe=6214F91B" />
                            <div className="navbar_profilename">
                                Akshat
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
        );
    }
}

export default NavBar;