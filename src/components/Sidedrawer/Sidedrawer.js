import React from 'react';
import classes from './Sidedrawer.css';
import {FaFacebookF, FaInstagram, FaTwitter, FaEnvelope} from 'react-icons/fa';

const sidedrawer = React.memo(props => {

    const changeDirection = link => {
 if (link === 'facebook') {
     window.location.href = "https://www.facebook.com";
 }else if (link === 'insta') {
     window.location.href = "https://www.instagram.com";
 }else if (link === "twitter") {
     window.location.href = "https://www.twitter.com";
 }else if (link === "email") {
     window.location.href = "https://www.gmail.com";
 }
    }

    return (
        <div className={classes.sidedrawer}>
<div className={classes.sideicons}>
    <a href=" #" onClick={() => changeDirection('facebook')} className={classes.side} ><FaFacebookF className={classes.icon}/></a>
    <a href=" #" onClick={() => changeDirection('insta')} className={classes.side}><FaInstagram className={classes.icon}/></a>
    <a href=" #" onClick={() => changeDirection('twitter')} className={classes.side} ><FaTwitter className={classes.icon}/></a>
    <a href=" #" onClick={() => changeDirection('email')} className={classes.side} ><FaEnvelope className={classes.icon}/></a>

</div>
        </div>
    )
}, []);

export default sidedrawer;