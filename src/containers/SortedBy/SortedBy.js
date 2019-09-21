import React, {Component} from 'react';
import classes from './SortedBy.css';
import SortedByComp from '../../components/SortedByComp/SortedByComp';
import * as action from '../../store/actions/index';
import {connect} from 'react-redux';
import Paginate from '../../components/ClickedActorComp/Paginate/Paginate';
import {withRouter} from 'react-router';
import {animateScroll as scroll } from 'react-scroll';

class SortedBy extends Component {

    state = {
        sorted: [
            {       
                name: 'Inglewood'
            }
        ],
        totalResults: 5065,
        currentPage: 1
    }

    
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.onSorted !== nextState.onSorted && nextProps.sorted !== nextState.sorted && nextProps.daki !== nextState.daki ) {
            return true;
        }else {
            return false;
        }
    }

    

    componentDidMount() {
if (this.props.daki === 'action') {
    this.actionSearch()
}else if(this.props.daki === 'horror') {
    this.horrorSearch();
}else if (this.props.daki === 'comedy') {
    this.props.onSorted(1, 35);
}else if (this.props.daki === 'crime') {
    this.props.onSorted(1, 80)
}else if (this.props.daki === 'fantasy') {
    this.props.onSorted(1, 10751)
}else if (this.props.daki === 'romance') {
    this.props.onSorted(1, 10749)
}else if (this.props.daki === 'adventure') {
    this.props.onSorted(1, 12)
}else if (this.props.daki === 'drama') {
    this.props.onSorted(1, 18)
}
    }
    
    actionSearch() {
        this.props.onSorted(1, 28);
    }

    horrorSearch() {
        this.props.onSorted(1, 27);
    }

    nextPage(pageNumber) {

        scroll.scrollTo(-2000, {smooth: true, duration: 700, });

        setTimeout(() => {
            if (this.props.daki === 'action') {
                this.props.onSorted(pageNumber, 28);
            }else if (this.props.daki === 'horror') {
                this.props.onSorted(pageNumber, 27);
            }else if(this.props.daki === 'comedy') {
                this.props.onSorted(pageNumber, 35);
            }else if (this.props.daki === 'crime') {
                this.props.onSorted(pageNumber, 80)
            }else if (this.props.daki === 'fantasy') {
                this.props.onSorted(pageNumber, 10751)
            }else if (this.props.daki === 'romance') {
                this.props.onSorted(pageNumber, 10749)
            }else if (this.props.daki === 'adventure') {
                this.props.onSorted(pageNumber, 12)
            }else if (this.props.daki === 'drama') {
                this.props.onSorted(pageNumber, 18)
            }
        }, 700);

        this.setState({currentPage: pageNumber})
       
    }

    titleChange()  {
        if (this.props.daki === 'horror') {
           return 'Horror'
        }else if (this.props.daki === 'action') {
           return 'Action'
        }else if (this.props.daki === 'comedy') {
            return 'Comedy'
        }else if (this.props.daki === 'crime') {
            return 'Crime'
        }else if (this.props.daki === 'fantasy') {
            return 'Fantasy'
        }else if (this.props.daki === 'romance') {
            return 'Romance'
        }else if (this.props.daki === 'adventure') {
            return 'Adventure'
        }else if (this.props.daki === 'drama') {
            return 'Drama'
        }
    }

    clickedMovie = (id) => {
        this.props.history.push('/movie/' + id);
    }

    render() {

        const numberPages = Math.floor(140 / 16);

        return (
            <div className={classes.behind} key={this.props.id}>
                <h2 className={classes.hed}>{this.titleChange()}</h2>
            <div className={classes.SortedBy}>
{this.props.sorted.map(el => {

    return <SortedByComp key={el.id} clicked={() => this.clickedMovie(el.id)} id={el.id} hd={el.hd} name={el.title} image={el.imageCreate} />
})}
            </div>
            {this.state.totalResults > 16 ?
    <Paginate className={classes.pag}  pages={numberPages} nextPage={this.nextPage.bind(this)} currentPage={this.state.currentPage} /> : ''}
            </div>
        )
    }
}

const mapWithProps = state => {
    return {
        sorted: state.sorted.sorted,
        loading: state.sorted.loading,
        error: state.sorted.error
    }
}

const mapWithPropsDispatch = dispatch => {
    return  {
        onSorted: (pageNumber, genreId) => dispatch(action.SORTED_FETCH(pageNumber, genreId))
    }
}

export default connect(mapWithProps, mapWithPropsDispatch)(withRouter(React.memo(SortedBy), []));