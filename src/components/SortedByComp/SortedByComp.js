import React from 'react';
import classes from './SortedByComp.css';
import Aux from '../../hoc/axxx';
import {IoIosPlay} from 'react-icons/io'

const SortedByComp = props => {

    return (
        <Aux>
         <div className={classes.SortedByComp}>
          <div className={classes.SortedByDetail} onClick={props.clicked} key={props.id} style={{
           //backgroundImage: "url(" + `${props.image}` + ")",
           background:` linear-gradient(20deg, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0) 70%) no-repeat center bottom , url(${props.image})`,
           backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
          }}>
           

<IoIosPlay className={classes.realicon} />
          </div>
        <span className={classes.sale}>
                 HD
              </span>
              <h3 className={classes.sortedHeaderc}><span className={classes.spanc}>{props.name}</span></h3> 
      </div>

        </Aux>
    )
};


export default SortedByComp;