import React from "react";
import project1 from './project1.png';
import project2 from './project2.png';
import project3 from './project3.png';
import project4 from './project4.png';

function Portfolio() {
    const images = [
        {
            'image' : project1,
            'name' : 'College Management System',
            'date' : 'June2022'
        },
        {
            'image':  project2,
            'name' : 'Fraud Detection System',
            'date' : 'Sept2023'
        },
        {
            'image':   project3 ,
            'name' : 'Music Player',
            'date' : 'March2023'
        } ,
        {
            'image':    project4,
            'name' : 'Weather Application',
            'date' : 'March2023'
        }
    ]
    return (
        <div className="text-bg-dark" style={{marginBottom:'0px', paddingLeft:'30px', paddingRight:'30px'}}>
            <div className="container text-bg-dark" style={{paddingLeft:'30px', paddingRight:'30px'}}>
                <div className="container text-bg-dark" style={{paddingLeft:'30px', paddingRight:'30px'}}>
                    <div style={{fontSize:'50px', textAlign:'center', fontWeight:'bolder'}}>
                        <p style={{display:'inline-block', textTransform:'uppercase'}}>My&nbsp;
                        <p style={{color:'goldenrod', display:'inline-block'}}>Portfolio</p></p>
                    </div>

                    <div style={{textAlign:'center'}}>
                        <p style={{display:'inline-block', color:'goldenrod'}}>━━━━</p>&nbsp;&nbsp;
                        <p style={{display:'inline-block'}}>A FEW RECENT DESIGN AND CODING PROJECTS. WANT TO SEE MORE? 
                        EMAIL ME.</p>&nbsp;&nbsp;
                        <p style={{display:'inline-block', color:'goldenrod'}}>━━━━</p>
                    </div><br/><br/>

                    {images.map((item, index) => (
                        <div className="row" key={index} style={{marginBottom:'80px'}}>
                            <div className="col-5">
                                <img src={item.image} alt="" style={{maxHeight:'600px', maxWidth:'600px', borderRadius:'20px'}}/>
                            </div>

                            <div className="col-7" style={{paddingLeft:'200px'}}>
                                <br/><br/><br/><br/>
                                <h2 style={{color:'goldenrod'}}>{item.name}</h2>
                                <p style={{color:'grey', fontSize:'25px'}}>{item.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;