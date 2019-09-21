import React, { Component } from 'react';
import AsyncChunk from './chunk/asyncChunk';
import './App.css';
import Aux from './hoc/axxx';
import { Route  } from "react-router-dom";
import * as actions from './store/actions/index';
import {connect} from 'react-redux'
import {withRouter} from 'react-router';
import {Switch} from 'react-router';
import posed, { PoseGroup } from 'react-pose';


const AsyncYoutube = AsyncChunk(() => {
  return import('./containers/Youtube/Youtube');
})

const AsyncLayout = AsyncChunk(() => {
  return import('./components/Layout/Layout');
})

const AsyncTrailer = AsyncChunk(() => {
  return import('./containers/Trailer/Trailer');
})

export const AsyncMovie = AsyncChunk(() => {
  return import('./containers/Movie/Movie');
})

const AyncClicked = AsyncChunk(() => {
  return import('./containers/tclickedMovie/ClickedMovie');
})

const AsyncActor = AsyncChunk(() => {
  return import('./containers/clickedActor/ClickedActor');
})

const AsyncSorted = AsyncChunk(() => {
  return import('./containers/SortedBy/SortedBy');
})

const AsyncLogin = AsyncChunk(() => import('./containers/LogIn/Login'))

class App extends Component {

  componentDidMount() {
    this.props.onLogin();
  }

  render() {

  const RouteContainer = posed.div({
    enter: {
      y: 0,
      opacity: 1,
      delay: 300,
      transition: {
        y: { type: 'spring', stiffness: 1000, damping: 15 },
        default: { duration: 300 }
      }
    },
    exit: {
      y: 0,
      opacity: 0,
      transition: { duration: 150 }
    }
  });

  const MovCont = posed.div({
    enter: {
      y: 0,
      opacity: 1,
      delay: 400,
      transition: {
        y: { type: 'spring', stiffness: 1000, damping: 15 },
        default: { duration: 300 }
      }
    },
    exit: {
      y: 0,
      opacity: 0,
      transition: { duration: 150 }
    }
  });

    const MovieContainer = posed.div({
      enter: { y: 0, opacity: 1, duration: 1000 },
      exit: { y: 0, opacity: 0 }
    })
 
    let genreRoutes = (
      <div>
        <Route render={({location}) => (
     <PoseGroup>
     <RouteContainer key={location.pathname}>
<Switch location={location}>
<Route path="/action" render={() => <AsyncSorted daki={'action'} />} />
<Route path="/horror" render={() => <AsyncSorted daki={'horror'} />} />
<Route path="/comedy" render={() => <AsyncSorted daki={'comedy'} />} />
<Route path="/drama" render={() => <AsyncSorted daki={'drama'} />} />
<Route path="/fantasy" render={() => <AsyncSorted daki={'fantasy'} />} />
<Route path="/romance" render={() => <AsyncSorted daki={'romance'} />} />
<Route path="/crime" render={() => <AsyncSorted daki={'crime'} />} />
<Route path="/adventure" render={() => <AsyncSorted daki={'adventure'} />} />
</Switch>
     </RouteContainer>
   </PoseGroup>
)}>


</Route>
   
</div>
    )

    let baseRoutes = (


<Aux>

<Route render={({location}) => (
     <PoseGroup>
     <RouteContainer key={location.pathname}>
<Switch location={location}>
            <Route path="/most-watched" render={() => <AsyncMovie movie='most-watched' />} />
            <Route path="/upcoming-movies" render={() => <AsyncMovie movie='upcoming-movies' />} />
</Switch>
     </RouteContainer>
   </PoseGroup>
)}>


</Route>

  
   
</Aux>

    )

    let realBase = (
      <div>

      <Route exact path="/" component={AsyncLayout} />
            <Route exact path={`/`} component={AsyncTrailer} />
       <Route path='/' exact render={() => <AsyncMovie movie='regular'/>} />
       </div>
    )

 
    let loginForm = (
  
<Route render={({location}) => (
     <PoseGroup>
     <RouteContainer key={location.pathname}>
<Switch location={location}>
<Route exact path={`/login`} component={AsyncLogin} />
</Switch>
     </RouteContainer>
   </PoseGroup>
)}>


</Route>

    )

    let movieRelated = (
      <div>
        <Route render={({location}) => (
     <PoseGroup>
     <MovCont key={location.pathname}>
<Switch location={location}>
<Route path={`/movie/:imdId`} render={() => <AyncClicked />} />
      <Route path={`/actors/:actorId`} render={() => <AsyncActor />} />
</Switch>
     </MovCont>
   </PoseGroup>
)}>



</Route>
      </div>
    )
    let youtubeLink = (
      <Route render={({location}) => (
        <PoseGroup>
        <MovieContainer key={location.pathname}>
   <Switch location={location}>
   <Route exact path={`/movie/:imdId/trailer`}  component={AsyncYoutube} />
   </Switch>
        </MovieContainer>
      </PoseGroup>
   )}>
   
   </Route>
    )

    
    return (
   <Aux>
     {realBase}
{baseRoutes}

{loginForm}

{youtubeLink}

{movieRelated}

{genreRoutes}
      </Aux>
    );
  }
}

const stateWithProps = state => {
  return {
      token: state.auth.token !== null,
      loading: state.auth.loading,
      error: state.auth.error
  }
}

const stateDispatchToProps = dispatch => {
  return {
      onAuthFetch: (username, password) => dispatch(actions.AUTH_FETCH(username, password)),
      onLogin: () => dispatch(actions.authCheckState())
  }
}
  

export default connect(stateWithProps, stateDispatchToProps)(withRouter(App));

