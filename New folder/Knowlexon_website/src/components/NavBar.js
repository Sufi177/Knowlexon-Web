import React, { useState } from "react";
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
    IconButton,
    Divider
} from '@material-ui/core';
import {
    makeStyles,
    ThemeProvider,
    createTheme,
    responsiveFontSizes
} from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import "@fontsource/roboto";
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import InfoIcon from '@material-ui/icons/Info';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const drawerWidth = 240;

const useStyles = makeStyles({
    AppBar: {
        backgroundColor: '#fff',
        caretColor: 'transparent',
        color: '#40048D',
        border: '0px'
    },
    drawer: {
        width: drawerWidth,

        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        height: '60vh',
        borderBottom: '1px solid grey',
        borderLeft: '1px solid grey'
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '90%',
        padding: 8
    },
})

let theme = createTheme({
    typography: {
        button: {
            fontSize: '1rem'
        }
    }
})

theme = responsiveFontSizes(theme)


const NavBar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(!open);
    };
    return (
        <ThemeProvider theme={theme}>
            <div className='big-screen'>
                <AppBar className={classes.AppBar}>
                    <Box display="flex" flexDirection="row" marginX={5} justifyContent="space-between">
                        <Box width="30%" marginTop={1}>
                            <img src="./knowlexon-logo-full.png" className="main-logo" />
                        </Box>
                        <Box display="flex" flexDirection="row" width="60%" justifyContent='flex-end'>
                            <Toolbar>
                                <Box display="flex" flexDirection="row" justifyContent="space-around" width="100%">
                                    <Link to="/" className="nav-links">
                                        <Box display="flex" flexDirection="row" marginX={2}>
                                            <Box marginX={1}>
                                                <HomeIcon />
                                            </Box>
                                            <Typography variant="button">home</Typography>
                                        </Box>
                                    </Link>
                                    <Link to="/client" className="nav-links">
                                        <Box display="flex" flexDirection="row" marginX={2}>
                                            <Box marginX={1}>
                                                <PersonIcon />
                                            </Box>
                                            <Typography variant="button" >client</Typography>
                                        </Box>
                                    </Link>
                                    {/* <Link to="/contact" className="nav-links">
                                        <Box display="flex" flexDirection="row" marginX={2}>
                                            <Box marginX={1}>
                                                <ContactSupportIcon />
                                            </Box>
                                            <Typography>CONTACT</Typography>
                                        </Box>
                                    </Link> */}
                                    <Link to="/about" className="nav-links">
                                        <Box display="flex" flexDirection="row" marginX={2}>
                                            <Box marginX={1}>
                                                <InfoIcon />
                                            </Box>
                                            <Typography variant="button">about</Typography>
                                        </Box>
                                    </Link>
                                </Box>
                            </Toolbar>
                        </Box>
                    </Box>
                </AppBar>
            </div>
            <div className="small-screen" >
                <AppBar className={classes.AppBar}>
                    <Box display="flex" flexDirection="row" marginX={5} justifyContent="space-between">
                        <Box width="30%">
                            <img src="./knowlexon-logo-full.png" className="main-logo" />
                        </Box>
                        <Box display="flex" flexDirection="row" width="60%" justifyContent='flex-end'>
                            <Toolbar>
                                <Box display="flex" flexDirection="row" justifyContent="space-around" width="100%">
                                    <IconButton
                                        edge="end"
                                        onClick={handleDrawerOpen}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                </Box>
                            </Toolbar>
                        </Box>
                    </Box>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="right"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader} >
                        <IconButton onClick={handleDrawerOpen}>
                            <ArrowBackIosIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <Link to="/" className="nav-links">
                        <IconButton onClick={handleDrawerOpen}>
                            <Box display="flex" flexDirection="row" >
                                <Box marginX={1}>
                                    <HomeIcon />
                                </Box>
                                <Typography>HOME</Typography>
                            </Box>
                        </IconButton>
                    </Link>
                    <Divider />
                    <Link to="/client" className="nav-links">
                        <IconButton onClick={handleDrawerOpen}>
                            <Box display="flex" flexDirection="row">
                                <Box marginX={1}>
                                    <PersonIcon />
                                </Box>
                                <Typography>CLIENTS</Typography>
                            </Box>
                        </IconButton>
                    </Link>
                    <Divider />
                    {/* <Link to="/contact" className="nav-links">
                        <IconButton onClick={handleDrawerOpen}>
                            <Box display="flex" flexDirection="row">
                                <Box marginX={1}>
                                    <ContactSupportIcon />
                                </Box>
                                <Typography>CONTACT</Typography>
                            </Box>
                        </IconButton>
                    </Link>
                    <Divider /> */}
                    <Link to="/about" className="nav-links" >
                        <IconButton onClick={handleDrawerOpen}>
                            <Box display="flex" flexDirection="row">
                                <Box marginX={1}>
                                    <InfoIcon />
                                </Box>
                                <Typography>ABOUT</Typography>
                            </Box>
                        </IconButton>
                    </Link>
                </Drawer>
            </div>
        </ThemeProvider>
    );
}

export default NavBar;