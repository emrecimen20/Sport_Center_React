import logo from "../images/logo.png"
function Footer() {
    return ( <>
     <footer className="foot">
        <div>
            <img src={logo}  alt="logo" style={{height:"10rem"}}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, facere blanditiis vero nostrum fugiat ea dolorem quos, tempore praesentium officiis voluptates a eos. Illo blanditiis fugit placeat accusamus veritatis molestiae maxime enim corporis, temporibus aperiam nesciunt neque voluptatem dolore dicta impedit, iste eveniet tempore nemo iusto assumenda rem repudiandae sed.</p>
        </div>
        <div className="footer-links">
            <div>
                <p>Information</p><br/>
                <a href="">About Us</a><br/>
                <a href="">Classes</a><br/>
                <a href="">Blog</a><br/>
                <a href="">Contact</a>
            </div>
            <div>
                <p>Helpful Links</p><br/>
                <a href="">Services</a><br/>
                <a href="">Supports</a><br/>
                <a href="">Terms & Condition</a><br/>
                <a href="">Privacy Policy</a>
            </div>
        </div>
    </footer>
    </> );
}

export default Footer;