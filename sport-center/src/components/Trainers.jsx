import trainer1 from "../images/trainer1.jpg"
import trainer2 from "../images/trainer2.jpg"
import trainer3 from "../images/trainer3.jpg"

function Trainers() {
    return ( <>
     <section className="trainer" id="trainer">
        <div className="title">
            <h2>OUR BEST TRAINERS</h2>
            <div style={{marginTop: "2rem"}} className="line"></div>
            <p>Lorem ipsum is not simply random text. It has roots in a piece of classical at <br/>
                Hampden-Sydney College
            </p>
        </div>
        <div className="trainer-cards">
            <div className="trainer-card">
                <img className="card-img" src={trainer1} alt="trainer1"/>
                <div className="trainer-info">Jane Doe <br/> Cardio Trainer </div>
                <div className="befores"></div>
                <div className="afters"></div>
            </div>
            <div className="trainer-card">
                <img className="card-img" src={trainer2} alt="trainer2"/>
                <div className="trainer-info">John Doe <br/> Cardio Trainer</div>
                <div className="befores"></div>
                <div className="afters"></div>
            </div>
            <div className="trainer-card">
                <img className="card-img" src={trainer3} alt="trainer3"/>
                <div className="trainer-info">Jane Doe <br/> Pilates Trainer </div>
                <div className="afters"></div>
                <div className="befores"></div>
            </div>
        </div>
    </section>
    </> );
}

export default Trainers;