import React from 'react'
import { Paper } from '@material-ui/core'
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import classes from '../../../styles/Card/Column4.module.scss'


const BorderLinearProgress = withStyles({
    root: {
        height: 10,
        backgroundColor: lighten('rgb(0,0,0)', 0.8),
        borderRadius: 0
    },
    bar: {
        borderRadius: 20,
        backgroundColor: '#07c407',
    },
})(LinearProgress);


const BorderLinearProgressLeft = withStyles({
    root: {
        height: 10,
        backgroundColor: lighten('rgb(0,0,0)', 0.8),
        borderRadius: 0
    },
    bar: {
        borderRadius: 20,
        backgroundColor: 'red',
    },
})(LinearProgress);


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },


}));


const Column4 = ({ data }) => {
    const styles = useStyles()
    return (
        <Paper >
            <div className={classes.column4} >
                <div className={classes.unrealizedPL} >
                    <span>Unrealized P/L</span>
                    <span>${data.unrealized_PL}</span>
                </div>
                <div className={classes.return}>
                    <span>% Return</span>
                    <span>
                        {Math.sign(data.unrealized_PL) >= 0 ?
                            <i className="fa fa-caret-up" style={{ color: '#07c407' }} />
                            :
                            <i className="fa fa-caret-down" style={{ color: 'red' }} />
                        }
                        &nbsp;{Math.abs(data.unrealized_PL * 100 / data.invested_amount).toFixed(2)}%
                    </span>
                </div>
                <div className={classes.progress}>

                    <BorderLinearProgressLeft
                        className={styles.margin}
                        variant="determinate"
                        color="secondary"
                        value={-(data.unrealized_PL * 100 / data.invested_amount).toFixed(2)}
                    />


                    <BorderLinearProgress

                        variant="determinate"
                        color="secondary"
                        value={(data.unrealized_PL * 100 / data.invested_amount).toFixed(2)}

                    />

                </div>
            </div>
        </Paper>
    )

}

export default Column4