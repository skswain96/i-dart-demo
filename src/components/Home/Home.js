/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Drawer } from "@material-ui/core";

import Card from "../Card/Card";
import DrawerContent from "./DrawerConent/DrawerContent";
import PortfolioChart from "../PortfolioChart/PortfolioChart";
import { getAllData } from "../../store/actions/index";

import "../../styles/Card/_drawerGlobal.scss";
import classes from "../../styles/HomePage.module.scss";
import LogoImg from "../../assets/img/logo.jpg";

const Home = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    if (props.data === null) {
      props.setUpData();
    } else {
    }
  }, [props.refreshData]);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleHamburgerClick = (index) => {
    toggleDrawer();
  };

  return (
    <div>
      <div className={classes.openMenuButton}>
        <img src={LogoImg} alt="i-dart logo" height="24" />
        <i className="fa fa-bars" onClick={handleHamburgerClick} />
      </div>
      {props.data ? (
        <>
          <div className="container-fluid" style={{ marginTop: 18 }}>
            <div className="row">
              <div className="col-md-9">
                {props.data.map((d, index) => (
                  <Card
                    key={index}
                    data={d}
                  // handleHamburgerClick={() => handleHamburgerClick(index)}
                  />
                ))}
              </div>

              <div className="col-md-3">
                <PortfolioChart />
              </div>
            </div>
          </div>

          <Drawer
            anchor={"right"}
            open={openDrawer}
            onClose={toggleDrawer}
            className="material-drawer"
          >
            <DrawerContent
              data={props.data}
              handleCloseSideDrawer={toggleDrawer}
            />
          </Drawer>
        </>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.root.data,
    refreshData: state.root.refreshData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUpData: () => dispatch(getAllData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
