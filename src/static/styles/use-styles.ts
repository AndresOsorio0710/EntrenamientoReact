import { blueGrey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import Theme from "./theme-config";

const colorFont = {
  primary: "#839597",
  secondary: "#89DAFF",
  warning: blueGrey[600],
};

const UseStyles = makeStyles(() => ({
  offset: Theme.mixins.toolbar,
  body: {
    backgroundColor: "#002b36",
    height: "100%",
    margin: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  a: {
    color: colorFont.primary,
    textDecoration: "none",
    display: "block",
  },
  containerCenter: {
    display: "grid",
  },
  center: {
    justifySelf: "center",
    alignSelf: "center",
  },
  containerCenterLeft: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: 40,
    widows: 40,
    padding: 2,
  },
}));

export default UseStyles;
