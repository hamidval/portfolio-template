import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import londonSky from './londonSky.jpg'

const imageStyle = {
    backgroundImage: `url(${londonSky})`,
    height:'30%',
    backgroundSize: '100% auto'

  }

class About extends Component {

   constructor(props){
        super(props)
        this.state={services:["websites","mobile apps","seo","web apps","websites","mobile apps","seo","web apps"],
                    image:null}

   }


   componentDidMount = () => {
    this.setState({image:londonSky})
   }


    render() {

        return ( 
      

           
        
        <div className='par-div'>

            <div style={imageStyle}>
               
       
            <div className='abs-txt strokeme'>About Us</div>
            
            </div>
            <div className='about-div div-margin '>
                <div className='h3'>Who we are? What we do?</div>
                <div>
                    <p className='h6'>
                        We are a small development group based in London, looking to take on small and medium sized projects
                        Our developers are young, ambitious and skilled in web and app development projects
                    </p>
                </div>
            </div>
            <div className='about-div div-margin'>
               <button className='btn btn-success'><div className='h3'>Meet The Developers</div></button> 
            
            </div>
            <div className='about-div div-margin'>
                <div className='h3'>Services</div>
                <div className='h6 grid'>
                    {
                        this.state.services.map((item,index)=>(
                            <div className='service '>
                                <div className='center-txt'>{item}</div>
                            </div>

                        ))
                    }
                
                </div>

                <div>

                </div>
            </div>

        </div>

        );
    }
}

export default withRouter(About);