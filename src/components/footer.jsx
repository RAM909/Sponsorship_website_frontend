import React, { useState } from 'react'
import { Link } from "react-router-dom";


const Footer = () => {
    const[ user, setuser]= useState("")

    const handleLinkClick = () => {
        const scrollToTop = () => {
            const currentScroll =
                document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(scrollToTop);
                window.scrollTo(0, currentScroll - currentScroll / 10);
            }
        };
        scrollToTop();
    }





    return (
        <div className="container">
            <div className="footer-content">
                <div className="blog-links">
                    <a href="#">Blog</a>
                    {/* <a href="#">Y REASONS WHY SPONSORSHIP 25 (WT) THE VOLY SUCK OF Ed S FLOR AT PITCHFORK FESTIVAL fet Spintar BUFFER AT MOZCON the et Spomorygination DREAMFORCE 2016 SPONSORSHIP PROSPECTUS THE TRUTH ABOUT HOW TO FIND SPONSORS</a>
        <a href="#">4 reasons why sponsorship is (n't) the ugly duck of marketing</a>
        <a href="#">Event Sponsorship Inspiration: Flor Carpet Squares at Pitchfork</a>
        <a href="#">Event Sponsorship Inspiration: Buffer At Mozcon</a>
        <a href="#">Event Sponsorship Inspiration: Dreamforce Event</a>
        <a href="#">Sponsorship Prospectus</a>
        <a href="#">The truth about how to find sponsors</a> */}
                    <a href="#">More Info</a>
                </div>
                <div className={""}>
                    <h3>Information</h3>
                    <ul>
                        <li>
                            <Link to="/about" onClick={handleLinkClick}>
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link to="/career" onClick={handleLinkClick}>
                                Careers
                            </Link>
                        </li>
                        {user && user.role == "Sponser" ? (
                            <li>
                                <Link to="/sponser" onClick={handleLinkClick}>
                                    Sponcer Panel
                                </Link>
                            </li>) : <li>
                            <Link to="/sponser" onClick={handleLinkClick}>
                                Become a Sponser
                            </Link>
                        </li>}
                        <li>
                            <Link to="/contact" onClick={handleLinkClick}>
                                Contact us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="copyright">
                    <p>&copy; 2024 Gosponcer  | All Rights Reserved.</p>
                </div>
            </div>
            <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-pinterest"></i></a>
            </div>
            <div className="contact-support">
                <a href="#">CONTACT SUPPORT</a>
            </div>
        </div>
    )
};
export default Footer;
