import React from 'react';
import Aux from '../../../hoc/axxx';
import classes from '../Input/Input.css';
import {IoIosPerson, IoIosKey} from 'react-icons/io';
import {FaKickstarter} from 'react-icons/fa';


const Input = props => {

    let inputType = null;
let allClasses = [classes.inputpass, classes.inputemail];

if (props.invalid && props.isTouched) {
    allClasses.push(classes.Invalid)
}
    switch (props.elementType) {

        case ('input'):

                inputType = <input className={allClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}></input>

                break;

        default: {
            inputType = null;
        }


    }
    return (
        <Aux>
              <span className={classes.welcome}>
<FaKickstarter className={classes.welcomeIcon} />
                </span>
                <IoIosPerson className={classes.loginIcon} />
                <span className={classes.inputfocus}></span>
            {inputType}
            <IoIosKey className={classes.loginKey} />
                <span className={classes.inputfocuspass}></span>
                   </Aux>
    )
}

export default Input;