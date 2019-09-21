import React, { Component } from 'react';
import classes from './Youtube.css';
import YoutubeComp from '../../components/YoutubeComp/YoutubeComp';
import {IoIosCloseCircleOutline} from 'react-icons/io';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class Youtube extends Component {
    state = {
        fetchedVideos: [],
        youtubeExist: false
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.youtubeExist !== nextState.youtubeExist) {
            return true;
        }else {
            return false;
        }
    }

    componentDidMount() {
        this.care(this.props.match.params.imdId)
    }

    clicking = () => {
        this.props.history.goBack();
    }

    care = (id) => {

        //NEMA TRAILERA
        let key = 'a1e70815ed514d294dc936b2f74a2ef3';
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=pt-BR&append_to_response=credits,release_dates,videos`).then(res => {
            let fetchMovies = [];
            let results = res;
            results.data.videos.results.map(el => {
               return results.youtube = el;
            })

            results.youtubeFull = "https://www.youtube.com/embed/" + results.youtube.key;

            fetchMovies.push(results)

            this.setState({fetchedVideos: fetchMovies, youtubeExist: fetchMovies[0].data.video ? false : true})

    }).catch(error => {
      console.log(error);
    })
}


    render() {
        return (
        this.state.youtubeExist ? <div onClick={() => this.clicking()} className={classes.Youtube}>
{this.state.fetchedVideos.map(el => {
    return <YoutubeComp key={el} url={el.youtubeFull} />
})}
<IoIosCloseCircleOutline onClick={() => this.clicking.bind(this)} className={classes.icon} />
            </div> :  <div onClick={() => this.clicking()} className={classes.Youtube}><p className={classes.youtubeNotExisting}>404<span className={classes.youtspan}>Your youtube link does not exist. Please visit our site.</span></p><IoIosCloseCircleOutline onClick={() => this.clicking.bind(this)} className={classes.icon} /></div>

        )
    }
}


export default withRouter(Youtube);