
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Home.css';
import photo from './Photo.jpeg';
import { Link } from 'react-router-dom'; 


function Home() {
  return (
    <div style={{ marginBottom: '100px' }}>
      <div
        className='text-light'
        style={{
          backgroundColor: 'transparent',
          marginTop: '150px',
          marginLeft: '400px',
          marginRight: '200px',
        }}
      >
        <div className='row'>
          <div className='col-md-4'>
            <img
              src={photo}
              alt=''
              className='rounded-circle'
              style={{ width: '280px', height: '280px' }}
            />
          </div>
          <div className='col-md-8'>
            <p style={{ fontSize: '20px' }}>HI THERE !</p>

            <h1>
              I'M <TypeAnimation sequence={[" NITI KOTHARI", 1000, " A SOFTWARE DEVELOPER", 1000," A WEB DEVELOPER", 
              1000, " A FULL STACK DEVELOPER", 1000
                    ]}
                    speed={50}
                    repeat={Infinity}
                    style={{ fontSize: '40px', color : 'goldenrod' }}
                />
            </h1>
            <p style={{fontSize : '17px', lineHeight : '2'}}>I'm a Full Stack and Web Developer based in Ahmedabad, Gujarat, India. <br/>
                I strive to build immersive and beautiful web applications through carefully 
                crafted code and user-centric design.</p>

            <Link to='/about' className='btn' id='button1' style={{backgroundColor:'goldenrod', color : 'white', borderRadius : '25px',
            paddingLeft : '30px', paddingRight : '30px', paddingTop:'10px', paddingBottom:'10px', fontWeight : 'bold', 
            marginRight:'60px', letterSpacing:'1.3px'}}><i className="fa fa-user" aria-hidden="true"></i> MORE ABOUT ME</Link>

            <a href='/portfolio' className='btn button2' style={{backgroundColor:'transparent', color : 'goldenrod', 
            border : '1px solid goldenrod', borderRadius : '25px', paddingLeft : '30px', paddingRight : '30px', 
            paddingTop:'10px', paddingBottom:'10px', fontWeight : 'bold', letterSpacing:'1.3px'}}><i className="fa fa-suitcase" aria-hidden="true"></i> PORTFOLIO</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
