import React from 'react'

import { Paper } from '@material-ui/core'
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import classes from '../../../styles/Card/Column3.module.scss'


const BorderLinearProgress = withStyles({
    root: {
        height: 10,
        backgroundColor: lighten('rgb(0,0,0)', 0.8),
        borderRadius: 30
    },
    bar: {
        borderRadius: 20,
        backgroundColor: '#07c407',
    },
})(LinearProgress);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    margin: {
        margin: theme.spacing(1),
    },
}));


const Column3 = (props) => {
    const styles = useStyles()
    return (
        <Paper>
            <div className={classes.column3}>
                <div className={classes.marketValue} >
                    <span>Market Value</span>
                    <span>${props.data.price * props.data.quantity}</span>
                </div>
                <div className={classes.portfolioValue} >
                    <span>% of portfolio value</span>
                    <span>{props.data.percent_portfolio_value}%</span>
                </div>
                <div className={classes.progress}>
                    <BorderLinearProgress
                        className={styles.margin}
                        variant="determinate"
                        color="secondary"
                        value={props.data.percent_portfolio_value}
                    />
                </div>
            </div>
        </Paper>
    )
}

export default Column3