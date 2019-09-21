import React from 'react';
import classes from './Paginate.css';



const pagination = props => {

    const pageLinks = [];

    for (let i = 1; i <= props.pages  + 1; i++) {
        let active = props.currentPage === i ? `${classes.selected}` : '';

        pageLinks.push(
 <li key={i} className={`${classes.paginationitem} ${active}`} ><a onClick={() => props.nextPage(i)} className={classes.paginationlink}>{i}</a></li>
            )
    }

    return (
        <div className={classes.paginationcontainer} data-wow-duration="0.5s">
	<ul className={classes.pagination}>
                {props.currentPage > 1 ? <li className={classes.paginationitem} onClick={() => props.nextPage(props.currentPage - 1)}>
                    <a className={classes.paginationlink}>prev</a></li> : ''}
        {pageLinks}
        {props.currentPage < props.pages + 1 ? <li className={classes.paginationitem} onClick={() => props.nextPage(props.currentPage + 1)}><a className={classes.paginationlink}>Next</a></li> : ''}
	</ul>
</div>
    )
}

export default pagination;
