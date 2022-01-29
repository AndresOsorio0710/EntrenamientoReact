import {
  Box,
  Typography,
  IconButton,
  Grid,
  Button,
  ButtonGroup,
} from "@mui/material";
import { useState } from "react";
import UseStyles from "../../static/styles/use-styles";
import { Add, HorizontalRule, Refresh } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const classes = UseStyles();

  return (
    <Box className={classes.body}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2" color={"#839597"}>
          Home
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > *": {
              m: 1,
            },
          }}
        >
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button>
              <Link to="/counter" className={classes.a}>
                Contador
              </Link>
            </Button>
            <Button>
              <Link to="/enraya" className={classes.a}>
                En Raya
              </Link>
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
