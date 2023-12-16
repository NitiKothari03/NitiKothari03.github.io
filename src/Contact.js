import React, { useRef } from "react";
import './components/Home.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser, faPaperPlane, faSquareEnvelope, faEnvelopeCircleCheck, faMessage} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp,  faInstagram, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4jj7o2y', 'template_6xzs5jf', form.current, 'U_dOnNWaC73gbJjac')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

    return(
        <div className="text-bg-dark" style={{marginBottom:'0px', paddingLeft:'30px', paddingRight:'30px'}}>      
            <div className="container text-bg-dark" style={{paddingLeft:'30px', paddingRight:'30px'}}>
                <div className="container text-bg-dark" style={{paddingLeft:'30px', paddingRight:'30px'}}>
                    <div style={{fontSize:'50px', textAlign:'center', fontWeight:'bolder'}}>
                        <p style={{display:'inline-block'}}>GET&nbsp;
                        <p style={{color:'goldenrod', display:'inline-block'}}>IN TOUCH</p></p>
                    </div>

                    <div style={{textAlign:'center'}}>
                        <p style={{display:'inline-block', color:'goldenrod'}}>━━━━</p>&nbsp;&nbsp;
                        <p style={{display:'inline-block'}}>I'M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS.</p>&nbsp;&nbsp;
                        <p style={{display:'inline-block', color:'goldenrod'}}>━━━━</p>
                    </div><br/><br/>

                    <div className="row">
                        <div className="col-4">
                            <div>
                                <p style={{color:'lightgray', fontSize:'19px'}}>Phone</p>
                                <p><a href="tel:+917265993303" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <FontAwesomeIcon icon={faWhatsapp} style={{color:'goldenrod', fontSize:'19px'}}/>&nbsp;&nbsp;
                                +91 726-599-3303</a></p>
                            </div><br/>
                            <div>
                                <p style={{color:'lightgray', fontSize:'19px'}}>Email</p>
                                <p><a href="mailto:nitikothari03@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <FontAwesomeIcon icon={faSquareEnvelope} style={{color:'goldenrod', fontSize:'19px'}}/>&nbsp;&nbsp;
                                nitikothari03@gmail.com</a></p>
                            </div><br/>
                            <div>
                                <p style={{color:'lightgray', fontSize:'19px'}}>Instagram</p>
                                <p><a href="https://www.instagram.com/_niti_kothari_/" style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} style={{color:'goldenrod', fontSize:'19px'}}/>&nbsp;&nbsp;
                                _niti_kothari_</a></p>
                            </div><br/>
                            <div>
                                <p style={{color:'lightgray', fontSize:'19px'}}>LinkedIn</p>
                                <p><a href="https://www.linkedin.com/in/niti-kothari-78779821a/" style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn} style={{color:'goldenrod', fontSize:'19px'}}/>&nbsp;&nbsp;
                                linkedin.com/in/niti-kothari-78779821a/</a></p>
                            </div><br/>
                            <div>
                                <p style={{color:'lightgray', fontSize:'19px'}}>Github</p>
                                <p><a href="https://github.com/NitiKothari03" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }} rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} style={{color:'goldenrod', fontSize:'19px'}}/>&nbsp;&nbsp;
                                github.com/NitiKothari03</a></p>
                            </div><br/>
                        </div>

                        <div className="col-8" style={{paddingRight:'100px', paddingTop:'20px', paddingLeft:'30px'}}>
                            <p style={{fontSize:'18px'}}>If you have any suggestion, project or even you want to say Hello.. 
                            please fill out the form below and I will reply you shortly.</p><br/>

                            <form ref={form} onSubmit={sendEmail}>
                                <div className="row">
                                    <div className="input-container col-6">
                                        <FontAwesomeIcon icon={faUser} style={{color:'goldenrod'}}/>
                                        <input type="text" placeholder="YOUR NAME" name="user_name"/>
                                    </div>

                                    <div className="input-container col-6">
                                        <FontAwesomeIcon icon={faEnvelopeCircleCheck} style={{color:'goldenrod'}}/>
                                        <input type="email" placeholder="YOUR EMAIL" name="user_email" /><br/>
                                    </div>
                                </div>

                                <div className="input-container">
                                    <FontAwesomeIcon icon={faMessage} style={{color:'goldenrod'}}/> &nbsp;
                                    <textarea placeholder="YOUR MESSAGE" rows={'5'} name="message" ></textarea>
                                </div>

                                <button type="submit"><FontAwesomeIcon icon={faPaperPlane} />&nbsp;&nbsp;SEND MESSAGE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
