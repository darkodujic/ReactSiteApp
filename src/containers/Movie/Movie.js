import React, { Component } from "react";
import Aux from "../../hoc/axxx";
import classes from "./Movie.css";
import MovieComp from "../../components/MovieComp/MovieComp";
import Radium from "radium";
import * as action from "../../store/actions/index";
import { connect } from "react-redux";
import Paginate from "../../components/ClickedActorComp/Paginate/Paginate";
import Loader from "react-loader-spinner";
import { withRouter } from "react-router";
import ScrollAnimation from "react-animate-on-scroll";
import { animateScroll as scroll } from "react-scroll";

class Movie extends Component {
  state = {
    totalResults: 432372,
    currentPage: 1,
    selectedId: null
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.movie !== nextState.movie) {
      return true;
    } else {
      return false;
    }
  }

  componentDidMount() {
    if (this.props.movie === "most-watched") {
      this.props.onMoviesPopular(1);
    } else if (this.props.movie === "regular") {
      this.props.onMoviesFetch(1);
    } else if (this.props.movie === "new-movies") {
      this.props.onMoviesLatest(1);
    } else if (this.props.movie === "upcoming-movies") {
      this.props.onMoviesUpcoming(1);
    }

    this.setState({ totalResults: 432372 });
  }

  scrollPage = () => {
    scroll.scrollTo(1000, { smooth: true, duration: 700 });
  };
  nextPage = pageNumber => {
    //URADI OVO
    scroll.scrollTo(this.props.movie === "regular" ? 1000 : 0, {
      smooth: true,
      duration: 700
    });
    setTimeout(() => {
      if (this.props.movie === "regular") {
        this.props.onMoviesFetch(pageNumber);
      } else if (this.props.movie === "most-watched") {
        this.props.onMoviesPopular(pageNumber);
      } else if (this.props.movie === "upcoming-movies") {
        this.props.onMoviesUpcoming(pageNumber);
      }
    }, 1000);
    this.setState({ currentPage: pageNumber });
  };

  dataHandler = (id, item) => {
    this.setState({ selectedId: id });
  };

  historyPush = id => {
    scroll.scrollTo(-2000, { smooth: true, duration: 700 });
    setTimeout(() => {
      this.props.history.push("/movie/" + id);
      this.props.history.location.hash = id;
    }, 500);
  };

  render() {
    let loading = (
      <Loader
        className={classes.loader}
        type="Audio"
        color="#fff"
        height={200}
        width={200}
      />
    );
    const numberPages = Math.floor(150 / 16);
    return (
      <Aux>
        <div>
          <div className={classes.movie}>
            <div className={classes.correct}>
              {this.props.loading ? loading : null}
              {this.props.movies.map((el, i) => {
                return (
                  <ScrollAnimation
                    key={i}
                    animateIn="fadeIn"
                    offset={100}
                    duration={1}
                    animateOnce={this.props.movie === "regular" ? true : false}
                  >
                    <MovieComp
                      click={() => this.historyPush(el.id)}
                      clicked={() => this.dataHandler(el.id, el)}
                      id={el.id}
                      image={el.imageCreate}
                      title={el.title}
                      bioskop={"/" + " " + el.release_date}
                      rev={el.vote_average}
                    />
                  </ScrollAnimation>
                );
              })}
            </div>
          </div>
          )
          {this.state.totalResults > 16 ? (
            <Paginate
              y={this.props.movie === "regular" ? 800 : 0}
              className={classes.pag}
              pages={numberPages}
              nextPage={this.nextPage.bind(this)}
              currentPage={this.state.currentPage}
            />
          ) : (
            ""
          )}
          }
        </div>
      </Aux>
    );
  }
}

const stateToProps = state => {
  return {
    movies: state.movie.movies,
    loading: state.movie.loading,
    error: state.movie.error
  };
};

const stateDispatchToProps = dispatch => {
  return {
    onMoviesFetch: pageNUmber => dispatch(action.MOVIE_FETCH(pageNUmber)),
    onMoviesPopular: pageNumber => dispatch(action.MOVIE_NEWEST(pageNumber)),
    onMoviesUpcoming: pageNUmber => dispatch(action.MOVIE_UPCOMING(pageNUmber))
  };
};

export default connect(
  stateToProps,
  stateDispatchToProps
)(Radium(withRouter(Movie)));
