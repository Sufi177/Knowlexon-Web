import React from 'react'
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

let theme = createTheme({
    typography: {
        overline: {
            fontWeight: 'bold',
        }
    }
})

theme = responsiveFontSizes(theme)

const Footer = () => {
    return (
        <ThemeProvider theme={theme}>
            <footer>
                <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap">
                    <Box display="flex" flexDirection="row" justifyContent="center" marginX={1}>
                        <Typography variant="overline" style={{ color: '#ffffff' }} align="center">
                            © Copyright 2018 
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" marginX={1}>
                        <Typography variant="overline" style={{ color: '#ffffff' }} align="center">
                             Knowlexon Innovation and Technology Pvt Ltd 
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" marginX={1}>
                        <Typography variant="overline" style={{ color: '#ffffff' }} align="center">
                           All Rights Reserved
                        </Typography>
                    </Box>
                </Box>
            </footer>
        </ThemeProvider>
    );
}

export default Footer;