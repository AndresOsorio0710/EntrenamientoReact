import { Box, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import UseStyles from "../../static/styles/use-styles";
import { Add, HorizontalRule, Refresh } from "@mui/icons-material";

const Counter = () => {
  const classes = UseStyles();
  const [counter, setCounter] = useState<number>(0);

  const increaseByOne = () => {
    setCounter(counter + 1);
  };

  const decreaseByOne = () => {
    setCounter(counter - 1);
  };

  const reboot = () => {
    setCounter(0);
  };

  return (
    <Box className={classes.body} >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2" color={"#839597"}>
          Couter
        </Typography>
        <Typography variant="h1" color={"#839597"}>
          {counter}
        </Typography>
        <Box sx={{ textAlign: "center" }}>
          <IconButton color="secondary" onClick={() => decreaseByOne()}>
            <HorizontalRule />
          </IconButton>
          <IconButton color="secondary" size="large" onClick={() => reboot()}>
            <Refresh />
          </IconButton>
          <IconButton color="secondary" onClick={() => increaseByOne()}>
            <Add />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Counter;
