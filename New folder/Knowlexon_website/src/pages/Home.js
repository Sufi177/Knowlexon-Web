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
    Button,
    Container
} from '@material-ui/core';
import {
    makeStyles,
    ThemeProvider,
    createTheme,
    responsiveFontSizes
} from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import Services from "./Services";
import Contact from "./Contact";
import ReactPlayer from 'react-player';

const useStyles = makeStyles({
    AppBar: {
        backgroundColor: '#fff',
        caretColor: 'transparent',
        color: '#40048D',
        border: '0px'

    }
})

let theme = createTheme()

theme = responsiveFontSizes(theme)
const Home = () => {
    return (
        <ThemeProvider theme={theme} >
            <Box display="flex" alignItems="center" flexDirection='column' minHeight="150vh" marginTop={-10}>
                <Box display="flex" alignItems="center" justifyContent="center" flexDirection='column' width="100%" minHeight="80vh">
                    {/* <ReactPlayer url='./video.mp4' width='100%'
                        height='100%' playing={true} loop={true} /> */}
                </Box>
                <Services />
                <Contact />
            </Box>
        </ThemeProvider>
    );
}

export default Home;