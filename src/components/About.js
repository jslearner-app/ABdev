import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import myface from './image/mypic.png';
import '../App.css';

class About extends Component {
    state = {  }
    render() { 
        return (<div className='about'>
            <div className='about-content'>
            <h1><Fade bottom cascade>About.</Fade></h1>
            <Fade bottom>
                    <p>{data.abouttext}</p>
            </Fade>
            </div>
           <img className="mypic" src={myface} alt="myface_pic"/>
            

        </div>  );
    }
}
 
export default About;