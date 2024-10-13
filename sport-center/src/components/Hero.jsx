
import '../App.css'

function Hero() {
    return ( <>
     <section className="hero" id="home">
        <div className="hero-text">
            <div className="text-content">
                <div>
                    <a href="" className="power-text">POWERFULL</a> <br />
                </div>
                
                <div className="spans">
                    <span className="span1">Group</span><br/>
                    <span>Practice</span><br/>
                    <span>With Trainer</span>
                </div>
               
            </div>
            <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus perferendis <br/>  quisquam quod ducimus eveniet voluptate ad ea assumenda neque, <br/> sed nostrum expedita ipsam quaerat cupiditate in fugiat voluptatem ratione labore.
            </p>
            <div className="hero-btns">
                <br/>
                <a href="" className="sign-btn">Sign Up</a>
                <a href="" className="details-btn">Details</a>
            </div>
        </div>
    </section>
    </> );
}

export default Hero;