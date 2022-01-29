import { Box, Container } from "@mui/material";
import TopBar from "./top-bar";
import { Routes, Route, Navigate } from "react-router";
import Counter from "./counter/counter";
import UseStyles from "../static/styles/use-styles";
import Home from "./home/home";
import EnRaya from "./en-raya/en-raya";

const Master = () => {
  const classes = UseStyles();
  return (
    <Box sx={{ height: "100%" }}>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/enraya" element={<EnRaya />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Box>
  );
};

export default Master;
