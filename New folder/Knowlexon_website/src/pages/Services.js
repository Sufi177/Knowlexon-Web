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
    responsiveFontSizes,
} from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    AppBar: {
        backgroundColor: '#fff',
        caretColor: 'transparent',
        color: '#40048D',
        border: '0px'

    }
})
const breakpoints = createBreakpoints({});
let theme = createTheme({
    typography: {
        h3: {
            fontFamily: ['Oxygen', 'sans-serif'],
            color: "#494550"
        },
        h5: {
            fontFamily: ['Oxygen', 'sans-serif'],
            color: "#ffffff",
            [breakpoints.down("xs")]: {
                fontSize: '1.2rem',
            },

        },
        h6: {
            color: "#ffffff",
            fontWeight: 'bold',
            fontSize: '1rem',
            [breakpoints.down("xs")]: {
                fontSize: '0.8rem',
            }
        }
    }
})

theme = responsiveFontSizes(theme)

const Services = () => {
    return (
        <ThemeProvider theme={theme} >
            <div className='big-screen'>
                <Box display="flex" alignItems="center" flexDirection='row' minHeight="50vh" padding={5}>
                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" width="100%" minHeight="20vh" marginBottom={10} flexWrap="wrap">
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="20%" height="100%" margin={5} className={["slots", "slot-1"]} borderRadius={10}>
                            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" padding={5} className="slot-inner" borderRadius={10}>
                                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" width="100%" height="10rem" paddingY={3}>
                                    <Typography variant='h5' align="center">
                                        Education and Training
                                    </Typography>
                                </Box>
                                <Box display="flex" flexDirection="row" width="100%" height="7rem" justifyContent="center" >
                                    <Typography variant="h6" align="center">
                                        Provide high class education , Employable education and self sustainable education. Creating skilled and employable manpower.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="20%" height="100%" margin={5} className={["slots", "slot-2"]} borderRadius={10}>
                            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" padding={5} className="slot-inner" borderRadius={10}>
                                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" width="100%" height="10rem" paddingY={3}>
                                    <Typography variant='h5' align="center">
                                        Internet of Things, Machine Learning, Big Data
                                    </Typography>
                                </Box>
                                <Box display="flex" flexDirection="row" width="100%" height="7rem" justifyContent="center">
                                    <Typography variant="h6" align="center">
                                        Help industries in Bigdata, IOT, Machine Learning, Deep Learning, Artificial Intelligence and Analytics.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="20%" height="100%" margin={5} className={["slots", "slot-3"]} borderRadius={10}>
                            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" padding={5} className="slot-inner" borderRadius={10}>
                                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" width="100%" height="10rem" paddingY={3}>
                                    <Typography variant='h5' align="center">
                                        Product Developement
                                    </Typography>
                                </Box>
                                <Box display="flex" flexDirection="row" width="100%" height="7rem" justifyContent="center"  >
                                    <Typography variant="h6" align="center">
                                        Develope Products Like mywatercan, mykrafts, hellotemp.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="20%" height="100%" margin={5} className={["slots", "slot-4"]} borderRadius={10}>
                            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" padding={5} className="slot-inner" borderRadius={10}>
                                <Box display="flex" flexDirection="row" justifyContent="center" width="100%" alignItems="center" height="10rem" paddingY={3}>
                                    <Typography variant='h5' align="center">
                                        Business  and Technology Consultancy
                                    </Typography>
                                </Box>
                                <Box display="flex" flexDirection="row" width="100%" height="7rem" justifyContent="center"  >
                                    <Typography variant="h6" align="center">
                                        Consultancy to the required clients for the Technology and Business Solutions.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </div>
            <div className='small-screen'>
                <Box display="flex" alignItems="center" flexDirection='column' justifyContent="center" width="100%" minHeight="150vh" padding={5}>
                    <Box display="flex" flexDirection="column" width="100%" minHeight="20vh" marginBottom={10}>
                        <Box width="100%" minHeight="20vh">
                            <img src="./servicesIcons/Education.jpg" alt="Education and Training" className="services-img" />
                        </Box>
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" overflow="hidden">
                            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" height="100%" >
                                <Box display="flex" flexDirection="row" justifyContent="center" width="100%" paddingY={3}>
                                    <Typography variant='h4' align="center">
                                        Education and Training
                                    </Typography>
                                </Box>
                                <Box display="flex" flexDirection="row" width="100%" justifyContent="center" >
                                    <Typography variant="h6" align="center">
                                        Provide high class education , Employable education and self sustainable education. Creating skilled and employable manpower.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="column" width="100%" minHeight="20vh" marginBottom={10} >
                        <Box width="100%" minHeight="20vh" >
                            <img src="./servicesIcons/machine_learning.jpg" alt="Education and Training" className="services-img" />
                        </Box>
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" overflow="hidden">
                            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" height="100%" >
                                <Box display="flex" flexDirection="row" justifyContent="center" width="100%" paddingY={3}>
                                    <Typography variant='h4' align="center">
                                        Internet of Things, Machine Learning, Big Data
                                    </Typography>
                                </Box>
                                <Box display="flex" flexDirection="row" width="100%" justifyContent="center">
                                    <Typography variant="h6" align="center">
                                        Help industries in Bigdata, IOT, Machine Learning, Deep Learning, Artificial Intelligence and Analytics.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="column" width="100%" minHeight="20vh" marginBottom={10}>
                        <Box width="100%" minHeight="20vh" >
                            <img src="./servicesIcons/product_development.jpg" alt="Education and Training" className="services-img" />
                        </Box>
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" overflow="hidden">
                            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" height="100%" >
                                <Box display="flex" flexDirection="row" justifyContent="center" width="100%" paddingY={3}>
                                    <Typography variant='h4' align="center">
                                        Product Developement
                                    </Typography>
                                </Box>
                                <Box display="flex" flexDirection="row" width="100%" justifyContent="center"  >
                                    <Typography variant="h6" align="center">
                                        Develope Products Like mywatercan, mykrafts, hellotemp.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="column" width="100%" minHeight="20vh"  >
                        <Box width="100%" minHeight="20vh">
                            <img src="./servicesIcons/business.jpg" alt="Education and Training" className="services-img" />
                        </Box>
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" overflow="hidden">
                            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" height="100%" >
                                <Box display="flex" flexDirection="row" justifyContent="center" width="100%" paddingY={3}>
                                    <Typography variant='h4' align="center">
                                        Business  and Technology Consultancy
                                    </Typography>
                                </Box>
                                <Box display="flex" flexDirection="row" width="100%" justifyContent="center"  >
                                    <Typography variant="h6" align="center">
                                        Consultancy to the required clients for the Technology and Business Solutions.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </div>
        </ThemeProvider>
    );
}

export default Services;