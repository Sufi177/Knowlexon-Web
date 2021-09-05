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
    Divider
} from '@material-ui/core';
import {
    makeStyles,
    ThemeProvider,
    createTheme,
    responsiveFontSizes
} from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import EmailSharpIcon from '@material-ui/icons/EmailSharp';
import PhoneSharpIcon from '@material-ui/icons/PhoneSharp';
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded';

const useStyles = makeStyles({
    AppBar: {
        backgroundColor: '#fff',
        caretColor: 'transparent',
        color: '#40048D',
        border: '0px'

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
            color: "#ffffff"
        },
        h5: {
            color: "#ADEFD1FF"
        },
        h6: {
            color: "#332e3c"
        },
        h4: {
            color: "#332e3c"
        },
        subtitle1: {
            color: "#332e3c"
        }
    }
})

theme = responsiveFontSizes(theme)

const Contact = () => {
    return (
        <ThemeProvider theme={theme} >
            <Box display="flex" alignItems="center" flexDirection='column' minHeight="50vh" width="100%" style={{ backgroundColor: '#a7a7a7' }}>
                <Box display="flex" flexDirection="row" width="100%" style={{ backgroundColor: '#00203FFF' }} >
                    <Box width="50%" height="60vh" padding={10} display="flex" flexDirection="column" justifyContent="center">
                        <Box padding={1}>
                            <Typography variant="h2">
                                Get In Touch
                            </Typography>
                        </Box>
                        <Box padding={1}>
                            <Typography variant="h5">
                                Want to get in touch ? We'd love to hear from you. Here's how you can reach us
                            </Typography>
                        </Box>
                    </Box>
                    <Box width="50%" height="60vh" className="contact-pic" style={{ borderTopLeftRadius: '1vh', borderBottomLeftRadius: '40vh' }}>

                    </Box>
                </Box>
                <Box display="flex" flexDirection="row" width="80%" >
                    <Box display="flex" flexDirection="column" marginTop={-5} zIndex={100} width="100%">
                        <Box display="flex" flexDirection="row" justifyContent="space-around" flexWrap="wrap">
                            <Box width="40%" height="50vh" style={{ backgroundColor: '#ffffff' }} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                    <Box height='8rem'>
                                        <PhoneAndroidOutlinedIcon style={{ fontSize: '7rem', color: '#0A66C2' }} />
                                    </Box>
                                    <Box margin={3}>
                                        <Typography variant="h4">
                                            Talk to Us
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width='100%'>
                                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" width='70%'>
                                        <Box padding={3} width="40%" display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                                            <EmailSharpIcon style={{ fontSize: '4rem', color: '#737373' }} />
                                        </Box>
                                        <Box padding={3} width="60%" display="flex" flexDirection="column" >
                                            <Typography variant="subtitle1" >
                                                Support@knowlexon.com
                                            </Typography>
                                            <Typography variant="subtitle1"  >
                                                info@knowlexon.com
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" width='70%'>
                                        <Box padding={3} width="40%" display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                                            <PhoneSharpIcon style={{ fontSize: '4rem', color: '#737373' }} />
                                        </Box>
                                        <Box padding={3} width="60%" display="flex" flexDirection="column">
                                            <Typography variant="subtitle1"  >
                                                +91-8007755770
                                            </Typography>
                                            <Typography variant="subtitle1"  >
                                                +91-9620203100
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box width="40%" height="50vh" style={{ backgroundColor: '#ffffff' }} >
                                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
                                    <Box height='8rem'>
                                        <BusinessCenterRoundedIcon style={{ fontSize: '7rem', color: '#0A66C2' }} />
                                    </Box>
                                    <Box margin={3}>
                                        <Typography variant="h4">
                                            Reach Us
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width='100%'>
                                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" width='100%'>
                                        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" padding={3} >
                                            <Typography variant="subtitle1" >
                                                No - 74, 11 Main, 14 Cross
                                                HSR Lay out, Bangalore - 102 ,
                                            </Typography>
                                            <Typography variant="subtitle1"  >
                                                Karnataka, India
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Divider />
                                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width='100%'>
                                    <Box >
                                        <Typography variant="h6">
                                            Other Links
                                        </Typography>
                                    </Box>
                                    <Box width="100%" display="flex" flexDirection="column" alignItems="center" marginTop={2}>
                                        <a href="https://mykrafts.com/" target="_blank" >
                                            <Typography variant="subtitle1" color="primary">mykrafts.com</Typography>
                                        </a>
                                        <a href="">
                                            <Typography variant="subtitle1" color="primary">mystartupyatra.com</Typography>
                                        </a>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box marginTop={5} display="flex" flexDirection="column" alignItems="center">
                    <Toolbar>
                        <Box>
                            <a href="https://twitter.com/knowlexon" target="_blank">
                                <TwitterIcon style={{ fontSize: '3rem', color: '#000000' }} />
                            </a>
                        </Box>
                        <Box>
                            <a href="https://www.facebook.com/knowlexon" target="_blank">
                                <FacebookIcon style={{ fontSize: '3rem', color: '#000000' }} />
                            </a>
                        </Box>
                        <Box>
                            <a href="https://www.youtube.com/watch?v=5lag3LFF_oM" target="_blank">
                                <YouTubeIcon style={{ fontSize: '3rem', color: '#000000' }} />
                            </a>
                        </Box>
                        <Box>
                            <a href="https://www.linkedin.com/company/knowlexon/mycompany/" target="_blank">
                                <LinkedInIcon style={{ fontSize: '3rem', color: '#000000' }} />
                            </a>
                        </Box>
                    </Toolbar>
                </Box>
            </Box>
        </ThemeProvider >
    );
}

export default Contact;