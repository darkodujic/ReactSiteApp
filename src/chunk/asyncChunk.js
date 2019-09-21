import React, { Component } from 'react';


const asyncChunk = (imporComp) => {
    return class extends Component {

        state = {
            component: null
        }
        
     componentDidMount() {
         imporComp().then(el => {
             this.setState({component: el.default})
         })
     }

        render() {

            const Component = this.state.component;

            return Component ? <Component {...this.props} /> : null;

        }
    }
}


export default asyncChunk;