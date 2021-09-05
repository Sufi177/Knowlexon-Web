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

const useStyles = makeStyles({
    AppBar: {
        backgroundColor: '#fff',
        caretColor: 'transparent',
        color: '#40048D',
        border: '0px'

    }
})

let theme = createTheme({
    typography: {
        h2: {
            fontFamily: ['Oxygen', 'sans-serif'],
            color: "#ffffff"
        },
        h3: {
            fontFamily: ['Oxygen', 'sans-serif'],
            color: "#ffffff"
        },
        h5: {
            color: "#ADEFD1FF"
        },
        h3: {
            fontFamily: ['Oxygen', 'sans-serif'],
            color: "#ffffff"
        },
        h6: {
            color: "#332e3c"
        }
    }
})

theme = responsiveFontSizes(theme)

const Client = () => {
    return (
        <ThemeProvider theme={theme} >
            <Box display="flex" alignItems="center" flexDirection='column' minHeight="90vh" marginTop={-10}>
                <Box display="flex" flexDirection="column" width="100%" paddingY={10} paddingX={15} style={{ backgroundColor: '#00203FFF' }}>
                    <Box padding={1}>
                        <Typography variant="h2" style={{ textShadow: '20px 20px 50px #2c3c8c' }}>
                            Better Service Starts Here
                        </Typography>
                    </Box>
                    <Box padding={1}>
                        <Typography variant="h5" style={{ textShadow: '20px 20px 50px #2c3c8c' }}>
                            Meet Our Esteemed Clients ...
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="column" width="100%" justifyContent="center" alignItems="center" marginTop={5}>
                    <Box display="flex" flexDirection="row" justifyContent="center">
                        <Box margin={5} className="client-box">
                            <Card>
                                <CardContent>
                                    <Box display="flex" width="20rem" height="10rem" justifyContent="center" alignItems="center">
                                        <img src="./clients_img/1280px-HubSpot_Logo.svg (2).png" alt="" className="med-logo" />
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                        <Box margin={5} className="client-box">
                            <Card>
                                <CardContent>
                                    <Box display="flex" width="20rem" height="10rem" justifyContent="center" alignItems="center">
                                        <img src="./clients_img/AB_InBev_logo_ABInBev-2048x894.png" alt="" className="med-logo" />
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                        <Box margin={5} className="client-box">
                            <Card>
                                <CardContent>
                                    <Box display="flex" width="20rem" height="10rem" justifyContent="center" alignItems="center">
                                        <img src="./clients_img/AntronsysLogoTransparent.gif" alt="" className="med-logo" />
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                        <Box margin={5} className="client-box">
                            <Card>
                                <CardContent>
                                    <Box display="flex" width="20rem" height="10rem" justifyContent="center" alignItems="center">
                                        <img src="./clients_img/edumentes.png" alt="" className="med-logo" />
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" marginTop={5}>
                        <Box margin={5} className="client-box">
                            <Card>
                                <CardContent>
                                    <Box display="flex" width="20rem" height="10rem" justifyContent="center" alignItems="center">
                                        <img src="./clients_img/freshworks-vector-logo (1).png" alt="" className="med-logo" />
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                        <Box margin={5} className="client-box">
                            <Card>
                                <CardContent>
                                    <Box display="flex" width="20rem" height="10rem" justifyContent="center" alignItems="center">
                                        <img src="./clients_img/Ginsep_Webseite_Logo1 (2).png" alt="" className="med-logo" />
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                        <Box margin={5} className="client-box">
                            <Card>
                                <CardContent>
                                    <Box display="flex" width="20rem" height="10rem" justifyContent="center" alignItems="center">
                                        <img src="./clients_img/logo-dark (2).png" alt="" className="med-logo" />
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                        <Box margin={5} className="client-box">
                            <Card>
                                <CardContent>
                                    <Box display="flex" width="20rem" height="10rem" justifyContent="center" alignItems="center">
                                        <img src="./clients_img/MSY-removebg-preview-1_auto_x2 (1).png" alt="" className="med-logo" />
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" marginTop={5}>
                        <Box margin={5} className="client-box">
                            <Card>
                                <CardContent>
                                    <Box display="flex" width="20rem" height="10rem" justifyContent="center" alignItems="center">
                                        <img src="./clients_img/my-placements-1615653471-325 (1).png" alt="" className="med-logo" />
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                        <Box margin={5} className="client-box">
                            <Card>
                                <CardContent>
                                    <Box display="flex" width="20rem" height="10rem" justifyContent="center" alignItems="center">
                                        <img src="./clients_img/startup-india-hub-logo-vector (1).png" alt="" className="med-logo" />
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                        <Box margin={5} className="client-box">
                            <Card>
                                <CardContent>
                                    <Box display="flex" width="20rem" height="10rem" justifyContent="center" alignItems="center">
                                        <img src="./clients_img/WhatsApp-Image-2020-08-01-at-22.09.12-1(1).jpeg" alt="" className="med-logo" />
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default Client;