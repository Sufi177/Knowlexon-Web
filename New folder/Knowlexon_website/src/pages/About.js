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
    Container,
    Card,
    CardContent
} from '@material-ui/core';
import {
    makeStyles,
    ThemeProvider,
    createTheme,
    responsiveFontSizes
} from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles({
    AppBar: {
        backgroundColor: '#fff',
        caretColor: 'transparent',
        color: '#40048D',
        border: '0px'

    },
    large: {
        width: '15rem',
        height: '15rem',
    },
})

let theme = createTheme({
    typography: {
        h2: {
            fontFamily: ['Oxygen', 'sans-serif'],
            color: "#ffffff"
        },
        h3: {
            fontFamily: ['Oxygen', 'sans-serif'],
            color: "#332e3c"
        },
        h5: {
            fontFamily: ['Oxygen', 'sans-serif'],
            color: "#332e3c"
        },
        h6: {
            color: "#332e3c"
        },
        subtitle1: {
            color: "#332e3c"
        },
    }
})

theme = responsiveFontSizes(theme)

const About = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme} >
            <Box display="flex" alignItems="center" flexDirection='column' minHeight="100vh" marginTop={-10} >
                <Box display="flex" flexDirection="column" width="100%" paddingY={10} paddingX={15} style={{ backgroundColor: '#00203FFF' }}>
                    <Box padding={1}>
                        <Typography variant="h2" style={{ textShadow: '20px 20px 50px #2c3c8c' }}>
                            Meet Our Professionals
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="column" width="90%" justifyContent="center" alignItems="center" margin={5} minHeight="80vh"  >
                    <Box padding={5}>
                        <Typography variant="h3">
                            Our Team
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center" width="100%">
                        <Box width="20%" height="60vh">
                            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="50%">
                                <Avatar alt="" src="" className={classes.large} />
                            </Box>
                            <Box height="50%">
                                <Box height="30%" display="flex" alignItems="center" justifyContent="center" >
                                    <Typography variant="h5" align="center">
                                        Mr. Munislin Mohanty
                                    </Typography>
                                </Box>
                                <Box height="70%" display="flex" padding={1} justifyContent="center">
                                    <Typography variant="subtitle1" align="center">
                                        A Big data Analyst expert, Retail management consultant, Philantrophist in heart. He is a part of our BIG Data Initiative.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box width="20%" height="60vh">
                            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="50%">
                                <Avatar alt="" src="" className={classes.large} />
                            </Box>
                            <Box height="50%">
                                <Box height="30%" display="flex" alignItems="center" justifyContent="center" >
                                    <Typography variant="h5" align="center">
                                        Mr. Sarbeswar Meher
                                    </Typography>
                                </Box>
                                <Box height="70%" display="flex" padding={1} justifyContent="center">
                                    <Typography variant="subtitle1" align="center">
                                        With a IIM Calcutta management degree and more than a Decade of experience in world's Top IT industries, he is now heading the Technology and R&D Division of Knowlexon
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box width="20%" height="60vh">
                            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="50%">
                                <Avatar alt="" src="" className={classes.large} />
                            </Box>
                            <Box height="50%">
                                <Box height="30%" display="flex" alignItems="center" justifyContent="center" >
                                    <Typography variant="h5" align="center">
                                        Mr. Priyadarshi Sadangi
                                    </Typography>
                                </Box>
                                <Box height="70%" display="flex" padding={1} justifyContent="center">
                                    <Typography variant="subtitle1" align="center">
                                        B.Tech and PGDBM degree and more than 12 years of experience from corporate. He is Leading our strategy Team
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box width="20%" height="60vh">
                            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="50%">
                                <Avatar alt="" src="" className={classes.large} />
                            </Box>
                            <Box height="50%">
                                <Box height="30%" display="flex" alignItems="center" justifyContent="center" >
                                    <Typography variant="h5" align="center">
                                        Ms. Sanghamitra
                                    </Typography>
                                </Box>
                                <Box height="70%" display="flex" padding={1} justifyContent="center">
                                    <Typography variant="subtitle1" align="center">
                                        Masters in Business management, and masters in psychology, with an avid interest in making our manpower the best, productive and satisfied. She is making our workplace the most productive and the happiest.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>


                    </Box>
                </Box>

                <Box display="flex" flexDirection="column" width="90%" justifyContent="center" alignItems="center" margin={5} minHeight="80vh"  >
                    <Box padding={5}>
                        <Typography variant="h3">
                            Our Advisors
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%">
                        <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center" width="100%">
                            <Box width="20%" height="60vh" marginX={5}>
                                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="50%">
                                    <Avatar alt="" src="" className={classes.large} />
                                </Box>
                                <Box height="50%">
                                    <Box height="30%" display="flex" alignItems="center" justifyContent="center" >
                                        <Typography variant="h5" align="center">
                                            Mr. Priyabrata Kuanr
                                        </Typography>
                                    </Box>
                                    <Box height="70%" display="flex" padding={1} justifyContent="center">
                                        <Box>
                                            <Typography variant="subtitle1" align="center">
                                                IIT Kanpur
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="subtitle1" align="center">
                                                Sr. Data Scientist for 12 years
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box width="20%" height="60vh" marginX={5}>
                                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="50%">
                                    <Avatar alt="" src="" className={classes.large} />
                                </Box>
                                <Box height="50%">
                                    <Box height="30%" display="flex" alignItems="center" justifyContent="center" >
                                        <Typography variant="h5" align="center">
                                            Mr. Abhishek Susarla
                                        </Typography>
                                    </Box>
                                    <Box height="70%" display="flex" padding={1} justifyContent="center">
                                        <Box>
                                            <Typography variant="subtitle1" align="center">
                                                IIT Gawahati
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="subtitle1" align="center">
                                                Director myofficeadmin.in
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box width="20%" height="60vh" marginX={5}>
                                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="50%">
                                    <Avatar alt="" src="" className={classes.large} />
                                </Box>
                                <Box height="50%">
                                    <Box height="30%" display="flex" alignItems="center" justifyContent="center" >
                                        <Typography variant="h5" align="center">
                                            Sandeep Sahoo
                                        </Typography>
                                    </Box>
                                    <Box height="70%" display="flex" padding={1} justifyContent="center">
                                        <Box>
                                            <Typography variant="subtitle1" align="center">
                                                Based on USA
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="subtitle1" align="center">
                                                Full Stack Developer
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                        </Box>
                        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" width="100%">
                            <Box width="20%" height="60vh" marginX={5}>
                                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="50%">
                                    <Avatar alt="" src="" className={classes.large} />
                                </Box>
                                <Box height="50%">
                                    <Box height="30%" display="flex" alignItems="center" justifyContent="center" >
                                        <Typography variant="h5" align="center">
                                            Mr. Biswa Gaurav Singh
                                        </Typography>
                                    </Box>
                                    <Box height="70%" display="flex" padding={1} justifyContent="center">
                                        <Box>
                                            <Typography variant="subtitle1" align="center">
                                                MS(Computer), USA
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="subtitle1" align="center">
                                                Machine Learning Expert
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box width="20%" height="60vh" marginX={5}>
                                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="50%">
                                    <Avatar alt="" src="" className={classes.large} />
                                </Box>
                                <Box height="50%">
                                    <Box height="30%" display="flex" alignItems="center" justifyContent="center" >
                                        <Typography variant="h5" align="center">
                                            Mr. Biswa Gaurav Singh
                                        </Typography>
                                    </Box>
                                    <Box height="70%" display="flex" padding={1} justifyContent="center">
                                        <Box>
                                            <Typography variant="subtitle1" align="center">
                                                MS(Computer), USA
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="subtitle1" align="center">
                                                Machine Learning Expert
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>


                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default About;