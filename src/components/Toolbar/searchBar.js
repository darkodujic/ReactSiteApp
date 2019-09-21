import React from 'react';
import classes from './searchBar.css';
import Bare from '../../assets/photo-1524712245354-2c4e5e7121c0.jpg';

const searchBar = props => {

    return (
        <div className={classes.searchRecomend} id="dare">
        <div className={classes.searchResult} key={props.id}>
        <div onClick={props.clicked} to className={classes.searchdetail}>

            <img alt={Bare} className={classes.image} src={props.image}></img>
        
        <h4 className={classes.searchingResult}>
        {props.title}
        </h4>
        <span className={classes.year}>
            {props.year}
        </span>
        </div>
        
        </div>
        </div>

    )
};

export default searchBar;