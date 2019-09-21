import React from "react";
import Aux from "../../hoc/axxx";
import classes from "./MovieComp.css";
import Radium from "radium";
import Bare from "../../assets/pexels-photo-908283.jpeg";

const movieComp = props => {
  return (
    <Aux>
      <div className={classes.moviecomp} onClick={props.clicked}>
        <div
          className={classes.movieCompDetail}
          key={props.id}
          onClick={props.click}
          style={{
            //backgroundImage: `url(${Son})`,
            backgroundImage: `url(${props.image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            opacity: "1",
            transition: "all .5s",
            backgroundPosition: "center",

            ":hover": {
              backgroundImage: `url(${Bare})`,
              transition: "all .5s"
            }
          }}
        >
          <h2 className={classes.heading2}>{props.title}</h2>
          <h3 className={classes.heading3}>{props.bioskop}</h3>
          <div className={classes.rating}>
            <i className="icon far fa-star">
              <span className={classes.number}>{props.rev}</span>
            </i>
          </div>
        </div>
      </div>
    </Aux>
  );
};

export default Radium(movieComp);
