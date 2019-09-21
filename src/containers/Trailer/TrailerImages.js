import React from 'react';
import Aux from '../../hoc/axxx';
import classes from './Trailer.css';
import Bare from '../../assets/photo-1524712245354-2c4e5e7121c0.jpg';

const trailerimages =  React.memo(props => {

    return (
<Aux>
<div className={classes.One}>
       <img alt={Bare} className={classes.Image} onClick={props.clicked} src={props.image}>
       </img>
       <h3 className={classes.title}><span className={classes.titlespan}>{props.title}</span></h3> 
       </div>

</Aux>
    )
    
});

export default trailerimages;