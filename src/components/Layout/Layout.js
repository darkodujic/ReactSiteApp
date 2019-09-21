import Aux from '../../hoc/axxx';
import React from 'react';
import Header from '../Header/Header';
import Sidedrawer from '../Sidedrawer/Sidedrawer';

const layout = props => {

    return (
<Aux>
    <div>
        <Header />
<Sidedrawer />
        </div>
    <main>
        {props.children}
    </main>
</Aux>
    )
}

export default layout;