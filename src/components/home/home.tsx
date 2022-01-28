import { Box, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import UseStyles from "../../static/styles/use-styles";
import { Add, HorizontalRule, Refresh } from "@mui/icons-material";

const Home = () => {
  const classes = UseStyles();

  return (
    <Box className={classes.body} >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2" color={"#839597"}>
          Home
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
