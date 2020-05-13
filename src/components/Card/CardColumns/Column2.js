import React from 'react'

import { Paper } from '@material-ui/core'
import classes from '../../../styles/Card/Column2.module.scss'

import '../../../assets/icons/fontawesome.min.css'

const Column1 = ({ data }) => {
    return (
        <Paper elevate={4}>
            <div className={classes.column2}>
                <div className={classes.quantity}>
                    <div className={classes.left}>
                        <i className="fa fa-database" />
                        <span>Quantity</span>
                    </div>
                    <span style={{ fontWeight: 'bold' }}>{data.quantity}</span>
                </div>
                <div className={classes.averageCost}>
                    <div className={classes.left}>
                        <i className="fas fa-at" />
                        <span>Avg. Cost</span>
                    </div>
                    <span style={{ fontWeight: 'bold' }}>${data.avg_cost}</span>
                </div>
                <div className={classes.investedAmount}>
                    <div className={classes.left}>
                        <i className="fa fa-money-bill" />
                        <span >Invested Amt</span>
                    </div>
                    <span style={{ fontWeight: 'bold' }}>${data.invested_amount}</span>

                </div>
            </div>
        </Paper>
    )
}

export default Column1