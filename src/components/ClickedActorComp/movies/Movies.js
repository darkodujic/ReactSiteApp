import React from 'react';
import classes from './Movies.css';
import Aux from '../../../hoc/axxx';

const Movies = props => {
    let style= {
        backgroundImage: 'url(' + props.path,
        backgroundSize: 'cover' 
    }
    return (
        <Aux>
        <div className={classes.card} key={props.id} style={style} onClick={props.clicked}>

            <h4 className={classes.movDetHead}>{props.title}</h4>
            
            </div>

        </Aux>
    

    )
};

export default Movies;
