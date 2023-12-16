import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {Row, Col } from 'react-bootstrap';
import pic from './photo2.jpeg';
import resume from './NK_s_Resume.pdf';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';


function About() {
    const skillsData = [
        {
        skill: 'HTML',
        progress: 90,
        },
        {
            skill: 'CSS',
        progress: 80,
        },
        {
            skill: 'JavaScript',
        progress: 80,
        },
        {
            skill: 'Python',
        progress: 100,
        },
        {
            skill: 'Java',
        progress: 75,
        },
        {
            skill: 'C Language',
        progress: 70,
        },
        {
            skill: 'C++',
        progress: 75,
        },
        {
            skill: 'MySQL',
        progress: 90,
        },
        {
            skill: 'MongoDB',
        progress: 90,
        },
        {
            skill: 'Oracle',
        progress: 90,
        },
        {
            skill: 'PostgreSQL',
        progress: 90,
        },
    ];
        
    return (
        <div className="text-bg-dark" style={{marginBottom:'0px', paddingLeft:'30px', paddingRight:'30px'}}>      
        <div className="container text-bg-dark" style={{paddingLeft:'30px', paddingRight:'30px'}}>
        <div className="container text-bg-dark" style={{paddingLeft:'30px', paddingRight:'30px'}}>
            <div style={{fontSize:'50px', textAlign:'center', fontWeight:'bolder'}}>
                <p style={{display:'inline-block'}}>ABOUT&nbsp;
                <p style={{color:'goldenrod', display:'inline-block'}}>ME</p></p>
            </div>

            <div style={{textAlign:'center'}}>
                <p style={{display:'inline-block', color:'goldenrod'}}>━━━━</p>&nbsp;&nbsp;
                <p style={{display:'inline-block'}}>I am a software developer who loves to create new things. 
                    I am passionate about learning new technologies and using them to solve problems</p>&nbsp;&nbsp;
                <p style={{display:'inline-block', color:'goldenrod'}}>━━━━</p>
            </div><br/><br/>

            <div className="row" style={{textAlign:'center'}}>
                <div className="col-5">
                    <img src={pic} alt="" style={{display:'inline-block'}} width={'430px'} height={'430px'}/>
                </div>
                <div className="col-3"><br/><br/>
                    <table style={{letterSpacing:'1.3px', lineHeight : '2', fontSize : '17px'}}>
                        <tr>
                            <td style={{color : 'lightgrey', float:'left'}}>First Name</td>
                            <td style={{color:'white'}}>Niti</td>
                        </tr>
                        <tr>
                            <td style={{color : 'lightgrey', float:'left'}}>Last Name</td>
                            <td style={{color:'white'}}>Kothari</td>
                        </tr>
                        <tr>
                            <td style={{color : 'lightgrey', float:'left'}}>Birthdate</td>
                            <td style={{color:'white'}}>03 June 2004</td>
                        </tr>
                        <tr>
                            <td style={{color : 'lightgrey', float:'left'}}>Nationality</td>
                            <td style={{color:'white'}}>Indian</td>
                        </tr>
                        <tr>
                            <td style={{color : 'lightgrey', float:'left'}}>Expirience</td>
                            <td style={{color:'white'}}>5 months</td>
                        </tr>
                        <tr>
                            <td style={{color : 'lightgrey', float:'left'}}>Address</td>
                            <td style={{color:'white'}}>A-202, Aaryam Appartments, Paldi, Ahmedabad, Gujarat</td>
                        </tr>
                    </table><br/>
                    <a href={resume} rel="" className="btn btn-outline-warning" style={{borderRadius:'20px', 
                    padding:'10px'}} download={resume} target="_blank">
                        <i className="fa fa-download"></i>&nbsp;&nbsp; Download my Resume
                    </a>
                </div>
                <div className="col-3" style={{marginRight:'20px'}}><br/><br/>
                    <table style={{letterSpacing:'1.3px', lineHeight : '2', fontSize : '17px'}}>
                        <tr>
                            <td style={{color : 'lightgrey', float:'left'}}>Freelance</td>
                            <td style={{color:'white'}}>Available</td>
                        </tr>
                        <tr>
                            <td style={{color : 'lightgrey', float:'left'}}>Langages</td>
                            <td style={{color:'white'}}>Gujarati, Hindi, English</td>
                        </tr>
                        <tr>
                            <td style={{color : 'lightgrey', float:'left'}}>Phone</td>
                            <td style={{color:'white'}}>+91 (726) 599 3303</td>
                        </tr>
                        <tr>
                            <td style={{color : 'lightgrey', float:'left'}}>Email</td>
                            <td style={{color:'white'}}>nitikothari03@gmail.com</td>
                        </tr>
                        <tr>
                            <td style={{color : 'lightgrey', float:'left'}}>LinkedIn</td>
                            <td style={{color:'white'}}>
                                <a href="https://www.linkedin.com/in/niti-kothari-78779821a/" className="nav-link">
                                    linkedin.com/in/niti-kothari-78779821a/
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td style={{color : 'lightgrey', float:'left'}}>GitHub</td>
                            <td style={{color:'white'}}>
                                <a href="https://github.com/NitiKothari03" className="nav-link">
                                    github.com/NitiKothari03
                                </a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div><br/>

            <hr/>

            <div className="row">
                <div className="col-6">
                    <h4 align='center' style = {{fontSize: "27px", color:"#fff", float:'left'}} >EXPIRIENCE</h4><br/><br/>
                    <ul style={{listStyleType:'circle'}}>
                        <li style={{fontWeight:'normal', color:'goldenrod', fontSize:'17px'}}>SOFTWARE ENGINEERING INTERN ━━ SOFTVAN</li>
                        <div>
                            <p className="text-secondary">
                                <i className="fa fa-calendar" aria-hidden="true"></i>
                                &nbsp;&nbsp;June 2022 - Nov 2022
                            </p>
                            <p>
                            Implemented a user-friendly interface with responsive design, improving the accessibility 
                            and usability of the project. Optimized database queries, resulting in a 30% reduction in 
                            query execution time and enhanced overall system performance. Successfully collaborated with
                             team members to deliver the project within the specified timeline and meet the requirements 
                             of the client.
                            </p>
                        </div>
                    </ul>
                </div>

                <div className="col-6">
                    <h4 align='center' style = {{fontSize: "27px", color:"#fff", float:'left'}} >EDUCATION</h4><br/><br/>
                    <ul style={{listStyleType:'circle'}}>
                        <li style={{fontWeight:'normal', color:'goldenrod', fontSize:'17px'}}>Bachelor Of Engineering</li>
                        <div>
                            <p className="text-secondary">
                                <i className="fa fa-calendar" aria-hidden="true"></i>
                                &nbsp;&nbsp;Dec 2022 - Dec 2025
                            </p>
                            <p>
                                Computer Science and Engineering <br/>
                                L. J. Institute of Engineering and Technology <br/>
                                L. J. University <br/>
                                SPI : 7.50 / 10.00 <br/>
                                Ahmedabad, Gujarat
                            </p>
                        </div>

                        <br/><br/>
                        <li style={{fontWeight:'normal', color:'goldenrod', fontSize:'17px'}}>Diploma Of Engineering</li>
                        <div>
                            <p className="text-secondary">
                                <i className="fa fa-calendar" aria-hidden="true"></i>
                                &nbsp;&nbsp; May 2019 - Dec 2022
                            </p>
                            <p>
                                Computer Engineering <br/>
                                L. J. Polytechnic <br/>
                                Gujarat Technological University  <br/>
                                CGPA : 8.80 / 10.00 <br/>
                                Ahmedabad, Gujarat
                            </p>
                        </div>

                        <br/><br/>
                        <li style={{fontWeight:'normal', color:'goldenrod', fontSize:'17px'}}>Diploma Of Engineering</li>
                        <div>
                            <p className="text-secondary">
                                <i className="fa fa-calendar" aria-hidden="true"></i>
                                &nbsp;&nbsp; March 2019
                            </p>
                            <p>
                                Secondary School Examination<br/>
                                C. N. Vidhyalaya <br/>
                                Gujarat Board  <br/>
                                72% <br/>
                                Ahmedabad, Gujarat
                            </p>
                        </div>
                    </ul>
                </div>
            </div>

            <hr/>
            <br/>

            <h3>SKILLS</h3>
        <br/>

      <Row>
        {skillsData.map((item, index) => (
          <Col md={3} key={index} style={{marginBottom:'50px'}}>
            <h5>{item.skill}</h5>
            <div className="circular-progress" style={{width: '120px', height: '100px', fontSize: '12px'}}>
              <CircularProgressbar
                value={item.progress}
                text={
                    `${item.progress}%`
                }
                styles={buildStyles({
                  textColor: 'goldenrod', 
                  pathColor: 'goldenrod', 
                  trailColor: 'black', 
                })}
              />
            </div>
          </Col>
        ))}
      </Row>
        </div>
        </div>
        </div>
    )
}

export default About;