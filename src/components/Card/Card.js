import React from 'react'
import { Paper } from '@material-ui/core'

import Column1 from './CardColumns/Column1'
import Column2 from './CardColumns/Column2'
import Column3 from './CardColumns/Column3'
import Column4 from './CardColumns/Column4'
import Column5 from './CardColumns/Column5'

import classes from '../../styles/Card/CardColumns.module.scss'
import '../../styles/bootstrap/bootstrapGrid.min.css'

const Card = ({ data, handleHamburgerClick }) => {
    const column1Data = {
        scrip: data.scrip,
        price: data.price
    }
    const column2Data = {
        quantity: data.quantity,
        avg_cost: data.avg_cost,
        invested_amount: data.invested_amount
    }
    const column3Data = {
        quantity: data.quantity,
        price: data.price,
        percent_portfolio_value: data.percent_portfolio_value
    }

    const column4Data = {
        unrealized_PL: data.unrealized_PL,
        invested_amount: data.invested_amount
    }


    return (
        <div className={classes.cardColumns}>

            <div className="col-lg-2">
                <Column1
                    data={column1Data}
                    handleHamburgerClick={handleHamburgerClick}
                />
            </div>
            <div className="col-lg-3">
                <Column2 data={column2Data} />
            </div>
            <div className="col-lg-3">
                <Column3 data={column3Data} />
            </div>
            <div className="col-lg-3">
                <Column4 data={column4Data} />
            </div>
            <div className="col-lg-1">
                <Column5 />
            </div>
        </div>

    )
}

export default Card

