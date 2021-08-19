import React from 'react';
import "./Footer.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
function Footer() {
    return (
        <div className="footer">
            <div className="left_footer">
            
            <div className="company">
            <h3>COMPANY</h3>
                <h4> Shipping</h4>
                <h4>Return Policy</h4>
                <h4>Work With Us</h4>
                <h4>Terms & Conditions</h4>
                </div>
            </div>
            <div className="middle_footer">
            
                
                <div className="company">
                <h3> FOLLOW US OUT THERE</h3>
                <h4><FacebookIcon/>Facebook</h4>
                <h4><TwitterIcon/>Twitter</h4>
                <h4><PinterestIcon/>Pinterest</h4>
                <h4><InstagramIcon/>Instagram</h4>
                </div>
            </div>
            <div className="right_footer">
               
                <div className="company">
                <h3> THANK YOU</h3>
                    <h5>Thank you the wonderful folks  over</h5><h5>
                    at Herbivore for letting us use their </h5><h5>
                    beautiful imagery in this demo. Head over</h5><h5>
                    to their store to shop their full catalog of</h5><h5>
                    amazing products</h5>
                </div>
            </div>
            <div className="last_footer">
            
                
            <div className="company">
            <h3> FOLLOW US OUT THERE</h3>
            <div className="subscribe">
            <input placeholder="example@gmail.com" />
            <button className="btn12" >Subscribe</button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Footer
