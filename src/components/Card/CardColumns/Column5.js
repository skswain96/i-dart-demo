import React from "react";
import { Button, makeStyles } from "@material-ui/core";

import classes from "../../../styles/Card/Column5.module.scss";

const useStyles = makeStyles({
  button: {
    border: "2px solid orange",
    color: "orange",
    width: 74,
    fontSize: "1.4rem",
  },
});

const Column5 = (props) => {
  const styles = useStyles();

  return (
    <div className={classes.column5}>
      <Button variant="outlined" className={styles.button}>
        BUY
      </Button>
      <Button variant="outlined" className={styles.button}>
        SELL
      </Button>
    </div>
  );
};

export default Column5;
