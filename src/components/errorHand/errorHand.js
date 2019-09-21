import React from 'react';
import Aux from '../../hoc/axxx';
import classes from './errorHand.css';


const errorHand = props => {

    return (
<Aux>
    <div className={classes.mark} clicked={props.clicked}>
        {props.clicked ?  <div className={classes.error}>
        {props.children}
    </div> : null } 
    </div>
</Aux>
    )
}

export default errorHand;