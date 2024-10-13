
function ContactUs() {
    return ( <>
     <section className="contactUs" id="contact">
        <div className="title">
            <h2>CONTACT US</h2>
            <div 
            style={{marginTop:"2rem"}} className="line"></div>
            <p>Lorem ipsum is not simply random text. It has roots in a piece of classical at <br/>
                Hampden-Sydney College
            </p>
        </div>
        <div className="contact-us">
            <div className="phone">
                <div className="email">
                    <div style={{lineHeight:"2rem"}}>
                        <p>Mobile Number<br/></p>
                        <p style={{fontSize:"1.5rem"}} >+135 773 321 4442</p>
                    </div>
                    <div style={{lineHeight:"2rem"}}>
                        <p>Email Address<br/></p>
                        <p style={{fontSize:"1.5rem"}}>demo@demo.com</p>
                    </div>

                </div>
                
                <div className="appointment">
                    <p>Make An Appointment</p>
                    <form action="" className="form">
                        <input className="inp" type="text" placeholder="Your Name"/>
                        <input className="inp"  type="email" name="" id="" placeholder="Your Email"/>
                        <textarea className="formInput"  placeholder="Your Message..." name="" id="" cols="40" rows="7"></textarea>
                    </form>
                </div>
                
            </div>
            <div id="location">
            <iframe loading="lazy" allowFullScreen style={{width:"400px",height:"350px",border:"0"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12609.87929621215!2d29.030838315129504!3d37.80246291361907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c74010cb9755eb%3A0x7d19c3a4ce9b9ad0!2zRGVuaXpsaSBPcm1hbiBGaWRhbmzEsWsgTcO8ZMO8cmzDvMSfw7w!5e0!3m2!1str!2str!4v1728833325964!5m2!1str!2str" ></iframe>
            </div>
            
        </div>
        
    </section>
    </> );
}

export default ContactUs;