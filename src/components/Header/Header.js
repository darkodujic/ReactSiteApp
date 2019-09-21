import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import classes from './Header.css';




const header = () => {

    return (
        <header className={classes.Header}>
<Toolbar />
</header>
    )
};

export default header;