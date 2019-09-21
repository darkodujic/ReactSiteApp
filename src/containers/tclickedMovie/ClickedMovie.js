import React, {Component } from "react";
import Aux from "../../hoc/axxx";
import classes from "./ClickedMovie.css";
import ClickedCompMovie from "../../components/clickedCompMovie/clickedCompMovie";
import axios from "axios";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import FeatherIcon from "feather-icons-react";

class ClickedMovie extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.fetchedData !== nextState.fetchedData &&
      nextProps.fetchedActors !== nextState.fetchedActors
    ) {
      return true;
    } else {
      return false;
    }
  }

  state = {
    fetchedData: [],
    fetchedActors: [],
    fetchedVideos: [],
    fetched: [],
    fetching: [],
    canClicked: this.props.token ? true : false
  };

  componentDidMount() {
    setTimeout(() => {
      this.dare(this.props.match.params.imdId);
    }, 400);
    this.mare(this.props.match.params.imdId);

   
  }

  goBack = () => {
    this.props.history.push("/");
  };

  dare = id => {
    let key = "a1e70815ed514d294dc936b2f74a2ef3";
    axios
      .get(`http://api.themoviedb.org/3/movie/${id}?api_key=${key}`)
      .then(res => {
        let fetchMovies = [];
        let results = res.data;
        results.runningTimeFull = Math.floor(results.runtime * (1 / 60));
        results.image =
          "https://image.tmdb.org/t/p/original" + results.poster_path;
        results.imageCreate =
          "https://image.tmdb.org/t/p/original" + results.backdrop_path;
        results.imdb = "https://www.imdb.com/title/" + results.imdb_id;

        fetchMovies.push(results);
        this.setState({ fetchedData: fetchMovies });
      })
      .catch(error => {
        console.log(error);
      });
  };

  mare = id => {
    let key = "a1e70815ed514d294dc936b2f74a2ef3";
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`)
      .then(res => {
        let fetchMovies = [];
        let results = res.data;
        results.director = results.crew[1].name;
        results.castArray = results.cast;
        results.castArray.map(el => {
          el.profile_path =
            "https://image.tmdb.org/t/p/original" + el.profile_path;
          el.profile =
            "http://image.tmdb.org/t/p/w185//nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg";
        });

        results.name = results.cast.map(el => {
          return el.name;
        });

        fetchMovies.push(results);
        this.setState({ fetchedActors: fetchMovies });
      })
      .catch(error => {
        console.log(error);
      });
  };

  trailerClicked = () => {
    this.props.history.push(this.props.match.url + "/trailer");
  };

  clickIcon = () => {
    setTimeout(() => {
      this.state.fetchedData.map(el => {
        return (window.location.href = el.imdb);
      });
    }, 1500);
  };

  scrollUp = () => {
    scroll.scrollTo(-2000, { smooth: true, duration: 700 });
  };

  clicking = actorId => {
    scroll.scrollTo(-2000, { smooth: true, duration: 700 });

    setTimeout(() => {
      this.props.history.push("/actors/" + actorId);
    }, 800);
  };

  render() {
    return (
      <Aux>
        <div className={classes.clickedMovie}>
          <div className={classes.clickedMovieNav}>
            <div className={classes.cont}>
              <Link onClick={() => this.scrollUp()} to={"/"} href="#">
                <FeatherIcon size="24" icon="home" className={classes.mare} />
              </Link>
              <Link
                onClick={() => this.scrollUp()}
                to={"/most-watched"}
                href="#"
              >
                <FeatherIcon icon="tv" className={classes.mare} />
              </Link>
              <Link
                onClick={() => this.scrollUp()}
                to={"/upcoming-movies"}
                href="#"
              >
                <FeatherIcon icon="video" className={classes.mare} />
              </Link>
              <Link onClick={() => this.scrollUp()} to={"/"} href="#">
                <FeatherIcon size="27" icon="x" className={classes.mare} />
              </Link>
            </div>
          </div>
          {this.state.fetchedData.map(el => {
            return (
              <ClickedCompMovie
              key={el.id}
                clickedSee={() => this.clickIcon()}
                canClicked={this.state.canClicked}
                trailerClick={this.trailerClicked}
                actor={this.state.fetchedActors.map(el => {
                  return el.castArray[0].profile_path;
                })}
                actorr={this.state.fetchedActors.map(el => {
                  //URADI OVO
                  //return el.castArray[1].profile_path
                  return el.castArray[1].profile_path || el.castArray.profile;
                })}
                actorrr={this.state.fetchedActors.map(el => {
                  return el.castArray[2].profile_path || el.castArray.profile;
                })}
                actorrrr={this.state.fetchedActors.map(el => {
                  return el.castArray[3].profile_path || el.castArray.profile;
                })}
                actorrrrr={this.state.fetchedActors.map(el => {
                  return el.castArray[4].profile_path;
                })}
                actorId={this.state.fetchedActors.map(el => {
                  return el.castArray[0].id;
                })}
                actorIdd={this.state.fetchedActors.map(el => {
                  return el.castArray[1].id;
                })}
                actorIddd={this.state.fetchedActors.map(el => {
                  return el.castArray[2].id;
                })}
                actorIdddd={this.state.fetchedActors.map(el => {
                  return el.castArray[3].id;
                })}
                actorIddddd={this.state.fetchedActors.map(el => {
                  return el.castArray[4].id;
                })}
                clicked1={() =>
                  this.clicking(
                    this.state.fetchedActors.map(el => {
                      return el.castArray[0].id;
                    })
                  )
                }
                clicked2={() =>
                  this.clicking(
                    this.state.fetchedActors.map(el => {
                      return el.castArray[1].id;
                    })
                  )
                }
                clicked3={() =>
                  this.clicking(
                    this.state.fetchedActors.map(el => {
                      return el.castArray[2].id;
                    })
                  )
                }
                clicked4={() =>
                  this.clicking(
                    this.state.fetchedActors.map(el => {
                      return el.castArray[3].id;
                    })
                  )
                }
                clicked5={() =>
                  this.clicking(
                    this.state.fetchedActors.map(el => {
                      return el.castArray[4].id;
                    })
                  )
                }
                clik={this.goBack}
                picture={el.image}
                header={el.original_title}
                rating={el.vote_average / 2}
                image={el.imageCreate}
                rate={el.vote_average / 2}
                reviews={el.vote_count}
                rel={el.status}
                id={el.id}
                text={el.overview}
                over={el.overview}
                date={el.release_date}
                popularity={el.popularity}
                lang={el.spoken_languages[0].name}
                direct={this.state.fetchedActors.map(el => {
                  return el.director;
                })}
                movie={el.genres.map(el => {
                  return el.name + "  " + ", ";
                })}
                runt={el.runningTimeFull}
                name={this.state.fetchedActors.map(el => {
                  return el.name[0];
                })}
                namee={this.state.fetchedActors.map(el => {
                  return el.name[1];
                })}
                nameee={this.state.fetchedActors.map(el => {
                  return el.name[2];
                })}
                nameeee={this.state.fetchedActors.map(el => {
                  return el.name[3];
                })}
                nameeeee={this.state.fetchedActors.map(el => {
                  return el.name[4];
                })}
              />
            );
          })}

          {this.props.saved.map(el => {
            return this.state.fetching.push(el);
          })}
        </div>
      </Aux>
    );
  }
}

const stateWithProps = state => {
  return {
    saved: state.saved.saved,
    loading: state.saved.loading,
    error: state.saved.error,
    token: state.auth.token !== null
  };
};

export default connect(
  stateWithProps,
  null
)(withRouter(ClickedMovie));
