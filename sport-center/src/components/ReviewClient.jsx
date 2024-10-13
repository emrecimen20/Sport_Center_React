import client1 from "../images/client1.jpg"
import client2 from "../images/client2.jpg"


function ReviewClient() {
    return ( <>
     <section className="review-client" id="review">
        <div className="title">
            <h2>REVIEW CLIENT</h2>
            <div style={{marginTop:"2rem"}} className="line"></div>
            <p>Lorem ipsum is not simply random text. It has roots in a piece of classical at <br/>
                Hampden-Sydney College
            </p>
        </div>
        <div className="client">
            <div className="client-head">
                <div className="client-title">
                    <img src={client1} alt="client1" className="client-img"/>
                    <div style={{padding:"0.4rem 1.1rem"}}>
                        <span style={{fontSize:"1.4rem"}}><strong>Diet Expert</strong></span><br/><br/>
                        <span><strong>CFO</strong></span>
                    </div>
                </div>
                <div className="client-p ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur velit quis doloribus 
                    cupiditate dignissimos reiciendis praesentium nemo 
                    architecto reprehenderit eum optio ducimus at modi quisquam, labore ex. Est, repudiandae.
                </div>
            </div>
            <div className="client-head">
                <div className="client-title">
                    <img src={client2} alt="client2" className="client-img"/>
                    <div style={{padding:"0.4rem 1.1rem"}}>
                        <span style={{fontSize:"1.4rem"}}><strong>Cardio Trainer</strong></span><br/><br/>
                        <span><strong>CEO</strong></span>
                    </div>
                </div>
                <div className="client-p ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod deserunt vel, assumenda
                    repellendus amet atque odio cumque ad repudiandae excepturi, 
                    illo iusto veritatis asperiores maxime exercitationem rem?
                </div>
            </div>
        </div>
    </section>

    </> );
}

export default ReviewClient;