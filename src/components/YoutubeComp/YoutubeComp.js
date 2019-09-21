import React from 'react';
import classes from './YoutubeComp.css';



const YoutubeComp = props => {
    return (
        <div className={classes.YoutubeComp}>
 <iframe title='Youtube' className={classes.dare}
src={props.url} allowFullScreen='allowfullscreen' allow="autoplay" frameBorder="0">
</iframe> 
        </div>
    )
};


export default YoutubeComp;