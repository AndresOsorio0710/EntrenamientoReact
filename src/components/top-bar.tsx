import { AppBar, Toolbar, Button, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import UseStyles from "../static/styles/use-styles";
import logo from "../static/images/png/logo.png";
import { Box } from "@mui/system";
//import UseStyles from "../static/styles/useStyles";

const TopBar = () => {
  const classes = UseStyles();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="button" sx={{ flexGrow: 1 }}>
          <Link to="/" className={classes.a}>
            <Box className={classes.containerCenterLeft}>
              <img src={logo} className={classes.logo} alt="logo" />
            </Box>
          </Link>
        </Typography>
        <Button variant="text" color="inherit" size="small">
          <Link to="/counter" className={classes.a}>
            Contador
          </Link>
        </Button>
        <Button variant="text" color="inherit" size="small">
          <Link to="/enraya" className={classes.a}>
            En Raya
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
