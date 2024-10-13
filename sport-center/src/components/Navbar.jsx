import logo from "../images/logo.png"
import '../App.css'
import { IoMdMenu } from "react-icons/io";
function Navbar() {
    return ( <>
     <header className="header" id="header">
        <div>
            <img src={logo} alt="" />
        </div>
        
        <nav className="main-navbar" id="main-navbar">
            <a href="#home">Home</a>
            <a href="#classes">Classes</a>
            <a href="#trainer">Trainer</a>
            <a href="#review">Review</a>
            <a href="#contact">Contact</a>
            <a href="#" className="join-btn">JOIN US</a>
        </nav>
        <div id="mobile-menu" className="hamburger-menu">
        <IoMdMenu/>
        </div>
    </header>
    </> );
}

export default Navbar;