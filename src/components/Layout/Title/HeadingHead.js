import React from 'react';
import Aux from '../../../hoc/axxx';
import ScrollAnimation from 'react-animate-on-scroll';

const headinghead = props => {

    return (
        <Aux>
            <ScrollAnimation animateIn="fadeIn" duration={1.2} offset={50}>

        
            <h2 className={props.classes}><a className={props.lav} href="/">LAVAREL</a></h2>
            </ScrollAnimation>
         
            {props.children}
        </Aux>
    )
}

export default headinghead;