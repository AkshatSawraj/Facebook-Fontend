import React,{Component} from "react";
import "./RightSidePanel.css";
import ImageLayout from "../ImageLayout/ImageLayout";
class RightSidePanel extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
    }
    state = {  }
    getData=()=>{
        let jsondata=[
        {
            "image":"https://scontent.fyyc7-1.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/67307284_2168539693256503_4777409917113860096_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=_guQKiPlBKUAX8EaFIZ&_nc_ht=scontent.fyyc7-1.fna&oh=00_AT9oodacQU-uk0dlKnpXXcXg-Jckjnn3jbmJP-YUwasgYw&oe=621479C9",
            "text":"Akshat Sawraj"
        },
        {
            "image":"https://scontent.fyyc7-1.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/67307284_2168539693256503_4777409917113860096_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=_guQKiPlBKUAX8EaFIZ&_nc_ht=scontent.fyyc7-1.fna&oh=00_AT9oodacQU-uk0dlKnpXXcXg-Jckjnn3jbmJP-YUwasgYw&oe=621479C9",
            "text":"COVID-19 Information Centre"
        }
        ]

        this.setState({data:jsondata})
    }
    componentDidMount(){this.getData();}
    render() { 
        return ( 
            <div className="rightside_container">
                <div className="rightside_header">
                    Contacts
                </div>
                <div className="rightside_content">
                {
                    this.state.data.map((item)=>(
                        <ImageLayout image={item.image} text={item.text} />         
                    ))

                }
                </div>
            </div>
         );
    }
}
 
export default RightSidePanel;