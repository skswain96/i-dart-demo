import React from 'react'

import { Paper } from '@material-ui/core'
import classes from '../../../styles/Card/Column1.module.scss'

const Column1 = ({ data, handleHamburgerClick }) => {
    return (
        <Paper elevate={4}>
            <div className={classes.column1}>
                <i className="fa fa-bars" onClick={handleHamburgerClick} />
                <div className={classes.scripData} >
                    <span className={classes.scrip}>{data.scrip}</span>
                    <span className={classes.price}>${data.price}</span>
                </div>
                <div className={classes.styledData} >
                    <span className={classes.ishares} >iShares</span>
                    <span className={classes.blackdoc} >by BlackDoc</span>
                    <span className={classes.sp} >S&P 500 Index</span>
                    <span className={classes.equity} >US Equity</span>
                </div>
            </div>
        </Paper>
    )
}

export default Column1