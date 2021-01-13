import React from 'react';
import {Link} from 'react-router-dom';
function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/aboutus">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="contactus">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-facebook" target = "_blank" rel = "noreferrer" href="http://www.facebook.com/profile.php?id=jiro.dev"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/jiro_deve"><i className="fa fa-instagram"></i></a>
                        <a className="btn btn-social-icon btn-github" rel = "noreferrer" target = "_blank" href="http://www.github.com/jironemo"><i className = "fa fa-github"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto text-white">
                    <p>© Copyright 2020 Jiro Nemo Production</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;