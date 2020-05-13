import React, { useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
import Select from "@atlaskit/select";
// import Textfield from "@atlaskit/textfield";
import Button from "@material-ui/core/Button";

import { connect } from "react-redux";
import { updateData, getScripData } from "../../../store/actions/index";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    minWidth: "100%",
  },
  marginBottom: {
    marginBottom: "15px",
  },
  resize: {
    fontSize: "1.6rem",
  },
}));

const DrawerContent = ({
  data,
  updateData,
  getScripValues,
  handleCloseSideDrawer,
}) => {
  const styles = useStyles();

  const [open, setOpen] = useState(false);
  const [scrip, setScrip] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [avgCost, setAvgCost] = useState("");
  const [investedAmount, setInvestedAmount] = useState("");
  const [percentProfileValue, setPercentProfileValue] = useState("");
  const [unrealizedPL, setUnrealizedPL] = useState("");
  const [returns, setReturns] = useState("");

  const handleChange = async (e) => {
    setScrip(e.value);
    let currentScrip = data.find((d) => d.scrip === e.value);
    setQuantity(currentScrip.quantity);
    setPrice(currentScrip.price);
    setAvgCost(currentScrip.avg_cost);
    setInvestedAmount(currentScrip.invested_amount);
    setPercentProfileValue(currentScrip.percent_portfolio_value);
    setUnrealizedPL(currentScrip.unrealized_PL);
    setReturns(currentScrip["return "]);
  };

  // const handleClose = () => {
  //     setOpen(false);
  // };

  // const handleOpen = () => {
  //     setOpen(true);
  // };

  const handleSubmit = () => {
    const newData = {
      scrip: scrip,
      quantity: quantity,
      price: price,
      avg_cost: avgCost,
      invested_amount: investedAmount,
      percent_portfolio_value: percentProfileValue,
      unrealized_PL: unrealizedPL,
      return: returns,
    };
    updateData(newData);
  };

  return (
    <Grid container direction="column" justify="center">
      <Grid item xs container justify="flex-end">
        <i
          className="fa fa-arrow-right"
          style={{
            cursor: "pointer",
            position: "absolute",
            right: 10,
            top: 10,
            fontSize: 20,
          }}
          onClick={handleCloseSideDrawer}
        />
      </Grid>
      <Grid item xs container className={styles.marginBottom}>
        <Select
          className="single-select"
          classNamePrefix="react-select"
          options={[
            ...data.map((d) => {
              return { label: d.scrip, value: d.scrip };
            }),
          ]}
          onChange={handleChange}
        />
        {/* 
                <FormControl variant="outlined" className={styles.formControl}>
                    <InputLabel id="open-select-label">Scrip</InputLabel>
                <Select
                    id="open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={scrip}
                    onChange={handleChange}
                >
                    {
                        data.map((d, index) =>
                            <MenuItem key={index} value={d.scrip}>{d.scrip}</MenuItem>
                        )
                    }
                </Select>
                </FormControl> */}
      </Grid>
      <Grid item xs container className={styles.marginBottom}>
        <TextField
          onChange={(e) => setPrice(e.target.value)}
          variant="outlined"
          label="Price"
          fullWidth
          value={price}
          InputProps={{
            classes: {
              input: styles.resize,
            },
          }}
          InputLabelProps={{
            classes: {
              root: styles.resize,
            },
          }}
        />
      </Grid>
      <Grid item xs container className={styles.marginBottom}>
        <TextField
          onChange={(e) => setQuantity(e.target.value)}
          variant="outlined"
          label="Quantity"
          fullWidth
          value={quantity}
          InputProps={{
            classes: {
              input: styles.resize,
            },
          }}
          InputLabelProps={{
            classes: {
              root: styles.resize,
            },
          }}
        />
      </Grid>
      {/* <Grid item xs container className={styles.marginBottom}>
        <TextField
          onChange={(e) => setAvgCost(e.target.value)}
          variant="outlined"
          label="Average Cost"
          fullWidth
          value={avgCost}
          InputProps={{
            classes: {
              input: styles.resize,
            },
          }}
          InputLabelProps={{
            classes: {
              root: styles.resize,
            },
          }}
        />
      </Grid> */}
      <Grid item xs container className={styles.marginBottom}>
        <TextField
          onChange={(e) => setInvestedAmount(e.target.value)}
          variant="outlined"
          label="Invested Amount"
          fullWidth
          value={investedAmount}
          InputProps={{
            classes: {
              input: styles.resize,
            },
          }}
          InputLabelProps={{
            classes: {
              root: styles.resize,
            },
          }}
        />
      </Grid>
      {/* <Grid item xs container className={styles.marginBottom}>
        <TextField
          onChange={(e) => setPercentProfileValue(e.target.value)}
          variant="outlined"
          label="Percent Portfolio Value"
          fullWidth
          value={percentProfileValue}
          InputProps={{
            classes: {
              input: styles.resize,
            },
          }}
          InputLabelProps={{
            classes: {
              root: styles.resize,
            },
          }}
        />
      </Grid> */}
      {/* <Grid item xs container className={styles.marginBottom}>
        <TextField
          onChange={(e) => setUnrealizedPL(e.target.value)}
          variant="outlined"
          label="Unrealized P&L"
          fullWidth
          value={unrealizedPL}
          InputProps={{
            classes: {
              input: styles.resize,
            },
          }}
          InputLabelProps={{
            classes: {
              root: styles.resize,
            },
          }}
        />
      </Grid> */}
      {/* <Grid item xs container className={styles.marginBottom}>
        <TextField
          onChange={(e) => setReturns(e.target.value)}
          variant="outlined"
          label="Return"
          fullWidth
          value={returns}
          InputProps={{
            classes: {
              input: styles.resize,
            },
          }}
          InputLabelProps={{
            classes: {
              root: styles.resize,
            },
          }}
        />
      </Grid> */}
      <Grid item xs container>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          fullWidth
          style={{
            fontSize: "1.6rem",
          }}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    currentScrip: state.root.currentScrip,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateData: (newData) => dispatch(updateData(newData)),
    getScripValues: (scrip) => dispatch(getScripData(scrip)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
