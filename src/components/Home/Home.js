import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Drawer } from '@material-ui/core'

import Card from '../Card/Card'
import DrawerContent from './DrawerConent/DrawerContent'
import PortfolioChart from '../PortfolioChart/PortfolioChart'
import { getAllData } from '../../store/actions/index'


import '../../styles/Card/_drawerGlobal.scss'
import classes from '../../styles/HomePage.module.scss'


const Home = props => {

    const [openDrawer, setOpenDrawer] = useState(false)

    useEffect(() => {
        props.setUpData()
    }, [])

    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer)
    }

    const handleHamburgerClick = (index) => {
        toggleDrawer()
    }

    return (
        <div>
            <div className={classes.openMenuButton} >
                <span>IDart</span>
                <i className="fa fa-bars" onClick={handleHamburgerClick} />
            </div>
            {
                props.data ?
                    <>

                        <PortfolioChart />
                        {
                            props.data.map((d, index) =>
                                <Card
                                    key={index}
                                    data={d}
                                // handleHamburgerClick={() => handleHamburgerClick(index)}
                                />
                            )
                        }

                        <Drawer anchor={'right'} open={openDrawer} onClose={toggleDrawer} className="material-drawer">
                            <DrawerContent data={props.data} handleCloseSideDrawer={toggleDrawer} />
                        </Drawer>
                    </>
                    :
                    null
            }

        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.root.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUpData: () => dispatch(getAllData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)