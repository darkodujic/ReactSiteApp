import React, { useCallback } from 'react';
import Aux from '../../hoc/axxx';
import classes from './clickedCompMovie.css';
import StarRatingComponent from 'react-star-rating-component';
import {FaChevronLeft} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {FiInstagram, FiTwitter, FiFacebook} from 'react-icons/fi';
import {withRouter} from 'react-router';
import ScrollAnimation from 'react-animate-on-scroll';
import {connect} from 'react-redux';
import Bare from '../../assets/photo-1524712245354-2c4e5e7121c0.jpg';

const clickedCompMovie = React.memo(props => {

    const changeDirection = useCallback(link => {

      if (link === 'facebook') {
        window.location.href = "https://www.facebook.com/";
      }else if (link === "instagram") {
        window.location.href = "https://www.instagram.com/";
      }else if (link === "twitter") {
        window.location.href = "https://www.twitter.com/";
      }else if (link === "email") {
          window.location.href = "https://gmail.com/";
      }       
    }, []);



   const limitTitle = useCallback((title, limit = 200) => {
        const titles = [];
        if (title.length > limit) {
            title.split(' ').reduce((acc, cur) => {
                if (acc + cur.length <= limit) {
                    titles.push(cur);
                }
                return acc + cur.length;
            }, 0);
            return `${titles.join(' ')}...`;
        }
        return title;
    }, []);



    return (
<Aux>
    <div className={classes.clickedComp} key={props.id} style={{
       background:` linear-gradient(135deg, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0) 70%) no-repeat center top , url(${props.image})`,
       backgroundPosition: 'center',
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
    }}>
        
<div className={classes.clickedCompFlex}>
<ScrollAnimation animateIn='fadeInDown' offset={50}>
<h3 className={classes.clickedCompHeader}>{props.header}</h3>
</ScrollAnimation>
<ScrollAnimation animateIn='fadeInLeft' offset={50}>
    <div className={classes.compFlex}>
    <StarRatingComponent
    starColor='blue'
          name="rate1" 
          starCount={5}
          value={props.rating}     
        />

        <span className={classes.compFlexRating}>{props.rate}</span>
        <span className={classes.revw}>{props.reviews} Reviews</span>
        <span className={classes.revw}>{props.rel}</span>
        </div>
        </ScrollAnimation>

        <p className={classes.compFlexP}>
       {limitTitle(props.text)}

        </p>
<ScrollAnimation animateIn="bounce">
        <div className={classes.buttons}>
        <button className={classes.buttonSave} onClick={props.trailerClick}>
                <div className={classes.fr}>Watch Trailer</div>
            </button>
       
            <button onClick={props.clickedSee} disabled={!props.token} className={classes.buttonSave}>
                <div className={classes.fr}>Visit site</div>
            </button>
        </div>
        </ScrollAnimation>
</div>


    </div>

    <div className={classes.detail} key='dare'>
        <img alt={Bare} className={classes.lore} src={props.picture}></img>
    
    <div className={classes.Summary}>
    <ScrollAnimation animateIn="fadeInUp">
        <h4 className={classes.header4}>Summary</h4>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft">
        <p className={classes.summaryText}>{props.over.length === 350 ? limitTitle(props.over, 350) : <span>{limitTitle(props.over, 350)}<span onClick={props.clickedSee} className={classes.seeMore}> Visit site</span></span>}</p>
        </ScrollAnimation>
        <div className={classes.marg}>
        <div className={classes.runtime}>
        <span className={classes.runTime}>Released :</span>
        <span className={classes.runTimee}>{props.date}</span>
    </div>
    <div className={classes.runtime}>
        <span className={classes.runTime}>Popularity :</span>
        <span className={classes.runTimee}>{props.popularity}</span>
    </div>

    <div className={classes.runtime}>
        <span className={classes.runTime}>Runtime :</span>
        <span className={classes.runTimee}>{props.runt} Hours</span>
    </div>
    <div className={classes.runtime}>
        <span className={classes.runTime}>Director :</span>
        <span className={classes.runTimee}>{props.direct}</span>
    </div>


    <div className={classes.runtime}>
        <span className={classes.runTime}>Genre :</span>
        <span className={classes.runTimee}>{props.movie}</span>
    </div>

    <div className={classes.runtime}>
        <span className={classes.runTime}>Language :</span>
        <span className={classes.runTimee}>{props.lang}</span>
    </div>

    </div>
    </div>

   
<div className={classes.cast}>

    <h3 className={classes.castHeader}>
        Main Cast :
    </h3>
  
    <div className={classes.castSlider}>
<div className={classes.castSlideDetail}  key={props.actorId}>
    <img alt={Bare} className={classes.castSlideImage} onClick={props.clicked1} src={props.actor}></img>
   <span className={classes.castSlideSpan}>{props.name}</span>
</div>
</div>

<div className={classes.castSlideDetail}  key={props.actorIdd}>
    <img alt={Bare} className={classes.castSlideImage} onClick={props.clicked2} src={props.actorr}></img>
   <span className={classes.castSlideSpan}>{props.namee}</span>
</div>

<div className={classes.castSlideDetail}   key={props.actorIddd}>
    <img alt={Bare} className={classes.castSlideImage} onClick={props.clicked3} src={props.actorrr}></img>
   <span className={classes.castSlideSpan}>{props.nameee}</span>
</div>

<div className={classes.castSlideDetail} key={props.actorIdddd}>
    <img alt={Bare} className={classes.castSlideImage} onClick={props.clicked4} src={props.actorrrr}></img>
   <span className={classes.castSlideSpan}>{props.nameeee}</span>
</div>

<div className={classes.castSlideDetail} key={props.actorIddddd}>
    <img alt={Bare} className={classes.castSlideImage} onClick={props.clicked5} src={props.actorrrrr}></img>
   <span className={classes.castSlideSpan}>{props.nameeeee}</span>
</div>

<div className={classes.media}>
<ScrollAnimation animateIn="fadeInLeft" offset={50}>

<a href=" #" ><FiFacebook onClick={() => changeDirection('facebook')} className={classes.care} /></a>
<a href=" #" ><FiInstagram onClick={() => changeDirection('instagram')} className={classes.care} /></a>
<a href=" #"><FiTwitter onClick={() => changeDirection('twitter')} className={classes.care} /></a>
<a href=" #" ><MdEmail onClick={() => changeDirection('email')} className={classes.care} /></a>

</ScrollAnimation>
</div>
</div>
  </div>

</Aux>
    )
}, FaChevronLeft);

const stateWithProps = state => {
    return {
        token: state.auth.token,
        loading: state.auth.loading,
        error: state.auth.error
    }
}


export default connect(stateWithProps, {})(withRouter(clickedCompMovie));