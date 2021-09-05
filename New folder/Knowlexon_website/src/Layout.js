import React, { Children, useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Drawer,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button
} from '@material-ui/core';
import {
    makeStyles,
    ThemeProvider,
    createTheme,
    responsiveFontSizes
} from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Client from "./pages/Client";
import About from "./pages/About";

let theme = createTheme()

theme = responsiveFontSizes(theme)

const Layout = () => {
    return (
        <Router>
                <ThemeProvider theme={theme}>
                    <NavBar />
                    <Box marginTop={15}>
                        <Switch>
                            <Route exact path='/'>
                                <Home />
                            </Route>
                            <Route path='/client'>
                                <Client />
                            </Route>
                            <Route path='/about'>
                                <About />
                            </Route>
                        </Switch>
                        <Footer />
                    </Box>
                </ThemeProvider>
        </Router>
    );
}

export default Layout;