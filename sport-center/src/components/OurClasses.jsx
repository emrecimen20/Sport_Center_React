import yoga from "../images/yoga.jpg"
import group from "../images/group.webp"
import solo from "../images/solo.jpg"
import stretching from "../images/stret.webp"
import '../App.css'
import { useState } from "react"

function OurClasses() {
    const [activeSection, setActiveSection] = useState(1);

    return ( <>
     <section className="our-classes" id="our-classes">
        <div className="bg"></div>
        <div className="our-title">
            <h2>OUR CLASSES</h2>
            <div className="line"></div>
            <p >Lorem ipsum is not simply random text. It has roots in a piece of classical at <br/>
                Hampden-Sydney College
            </p>
        </div>
        <div className="btns" id="btns">
            <button onClick={()=>setActiveSection(1)} className="btn" id="yoga-btn">Yoga</button>
            <button onClick={()=>setActiveSection(2)} className="btn" id="group-btn">Group</button>
            <button onClick={()=>setActiveSection(3)} className="btn" id="solo-btn">Solo</button>
            <button onClick={()=>setActiveSection(4)} className="btn" id="stretch-btn">Stretching</button>
        </div>

        {activeSection===1 && <div className="text-content-class">
            <div className="classes-text">
                <h3 id="header1" className="header1">Why Should You Do Yoga?</h3><br/>
                <p className="parag1">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus distinctio in! Sequi, fuga esse facilis quis similique nam, voluptatibus recusandae amet quasi nobis ipsum quod harum consequatur voluptas adipisci.
                </p><br/>
                <h3 className="header2">When Will Your Time Come?</h3><br/>
                <p id="parag2" className="parag2">
                    Saturday-Sunday: 8.00am - 10.00am<br/> Monday-Tuesday: 10.00am - 12.00pm<br/>Wednesday-Friday: 3.00pm - 6.00pm
                </p>
            </div>
            <div className="classes-img">
                <img src={yoga} alt="" style={{height: "30rem",width:"30rem"}} />
            </div>
        </div> }
        
        {activeSection===2 && <div className="text-content-class">
            <div className="classes-text">
                <h3 id="header1" className="header1">Why Should You Do Group?</h3><br/>
                <p className="parag1">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus distinctio in! Sequi, fuga esse facilis quis similique nam, voluptatibus recusandae amet quasi nobis ipsum quod harum consequatur voluptas adipisci.
                </p><br/>
                <h3 className="header2">When Will Your Time Come?</h3><br/>
                <p id="parag2" className="parag2">
                    Saturday-Sunday: 8.00am - 10.00am<br/> Monday-Tuesday: 10.00am - 12.00pm<br/>Wednesday-Friday: 3.00pm - 6.00pm
                </p>
            </div>
            <div className="classes-img">
                <img src={group} alt="" style={{height: "30rem",width:"30rem"}} />
            </div>
        </div>}
        

        {activeSection===3 &&  <div className="text-content-class">
            <div className="classes-text">
                <h3 id="header1" className="header1">Why Should You Do Solo?</h3><br/>
                <p className="parag1">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus distinctio in! Sequi, fuga esse facilis quis similique nam, voluptatibus recusandae amet quasi nobis ipsum quod harum consequatur voluptas adipisci.
                </p><br/>
                <h3 className="header2">When Will Your Time Come?</h3><br/>
                <p id="parag2" className="parag2">
                    Saturday-Sunday: 8.00am - 10.00am<br/> Monday-Tuesday: 10.00am - 12.00pm<br/>Wednesday-Friday: 3.00pm - 6.00pm
                </p>
            </div>
            <div className="classes-img">
                <img src={solo} alt="" style={{height: "30rem",width:"30rem"}} />
            </div>
        </div>}
       
       {activeSection===4 && <div className="text-content-class">
            <div className="classes-text">
                <h3 id="header1" className="header1">Why Should You Do Stretching?</h3><br/>
                <p className="parag1">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus distinctio in! Sequi, fuga esse facilis quis similique nam, voluptatibus recusandae amet quasi nobis ipsum quod harum consequatur voluptas adipisci.
                </p><br/>
                <h3 className="header2">When Will Your Time Come?</h3><br/>
                <p id="parag2" className="parag2">
                    Saturday-Sunday: 8.00am - 10.00am<br/> Monday-Tuesday: 10.00am - 12.00pm<br/>Wednesday-Friday: 3.00pm - 6.00pm
                </p>
            </div>
            <div className="classes-img">
                <img src={stretching} alt="" style={{height: "30rem",width:"30rem"}} />
            </div>
        </div>}
        
    </section>
    </> );
}

export default OurClasses;