import React, {PureComponent} from 'react';
import classes from './Trailer.css';
import Carousel from 'nuka-carousel';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import TrailerImages from './TrailerImages';
import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import ErrorHandler from '../../errorWithHandler/errorWithHandler';
import {withRouter} from 'react-router'


class Trailer extends PureComponent  {

  state = {
    trailer: [],
    loading: false
  }


  componentDidMount() {
    this.trailerSearch();
  }


  trailerSearch() {
    let key = 'a1e70815ed514d294dc936b2f74a2ef3';
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${key}`)
        .then(res => {

          this.setState({loading: true})

          const results = res.data.results;

         let formTrailer = [];
         results.forEach(el => {
         el.poster_src = 'https://image.tmdb.org/t/p/original' + el.backdrop_path;
          formTrailer.push(el);
         })
         formTrailer.splice(Math.random(5, 10), 15);
         this.setState({trailer: formTrailer, loading: false})

        }).catch(error => {
          this.setState({loading: false})
         console.log(error);
        })
  }
  
  trailerClick = id => {
    this.props.history.push('/movie/' + id)
    this.props.history.location.hash = id;
  }


    render() {
      let ttrai = (
        <div className={classes.Trailer}>
        <div className={classes.Trailerr}>
           <Carousel
           renderCenterLeftControls={({ previousSlide }) => (
            <button className={classes.renderArrow} onClick={previousSlide}>
              <FiChevronLeft className={classes.dare} />
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button className={classes.renderArrow} onClick={nextSlide}>
             <FiChevronRight className={classes.dare} />
            </button>
          )} autoplay enableKeyboardControls speed={1000} swiping transitionMode='scroll3d' width='100%' height='110%' wrapAround opacityScale={0.4}>
               
       {this.state.trailer.map((el, i) => {
         return <TrailerImages key={i} clicked={() => this.trailerClick(el.id)} title={el.original_title} image={el.poster_src} />
       })}
    </Carousel>
    </div>
    </div>
      )
        return (
          this.state.loading ? <Loader className={classes.loader} type="Audio" color="#fff" height={100} width={100} /> : ttrai
        )
    }
}


export default ErrorHandler(withRouter(Trailer), axios);