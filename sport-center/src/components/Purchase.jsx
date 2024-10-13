import purchase1 from "../images/purchase1.jpg"
import purchase2 from "../images/purchase2.jpg"
import purchase3 from "../images/purchase3.jpg"
import purchase4 from "../images/purchase4.jpg"
import { FaShoppingCart } from "react-icons/fa";
import '../App.css'

function Purchase() {
    return ( <>
     <section className="purchase">
        <div className="title">
            <h2>PURCHASE FROM US</h2>
            <div style={{marginTop:"2rem"}} className="line"></div>
            <p>Lorem ipsum is not simply random text. It has roots in a piece of classical at <br/>
                Hampden-Sydney College
            </p>
        </div>
        <div className="cards">
            <div className="card">
                <img src={purchase1} alt="purchase1"/>
                <h3>Kettlebell / 5kg</h3>
                <h5><span style={{textDecoration:"line-through"}}>89,99$ </span>/ 59,9$</h5>
                <div className="shop">
                <FaShoppingCart />
                    <h5>Add To Cart</h5>
                </div>
            </div>
            <div className="card">
                <img src={purchase2} alt="purchase1"/>
                <h3>Treadmill</h3>
                <h5><span style={{textDecoration:"line-through"}} >899,99$ </span>/ 599,9$</h5>
                <div className="shop">
                <FaShoppingCart />
                    <h5>Add To Cart</h5>
                </div>
            </div>
            <div className="card">
                <img src={purchase3} alt="purchase1"/>
                <h3>Adjustable Dumbbell</h3>
                <h5><span style={{textDecoration:"line-through"}} >89,99$</span>/ 59,9$</h5>
                <div className="shop">
                <FaShoppingCart />
                    <h5>Add To Cart</h5>
                </div>
            </div>
            <div className="card">
                <img src={purchase4} alt="purchase1"/>
                <h3>Kettlebell / 3kg</h3>
                <h5><span style={{textDecoration:"line-through"}} >69,99$ </span>/ 49,9$</h5>
                <div className="shop">
                <FaShoppingCart />
                    <h5>Add To Cart</h5>
                </div>
            </div>
        </div>
    </section>
    </> );
}

export default Purchase;