import { AppBar, Box, Typography, Toolbar } from '@mui/material';

function Footer() {
    return (
        <Box sx={{ flexGrow: 1, marginTop: '1rem' }}>
            <AppBar position='static'>
                <Toolbar sx={{ backgroundColor: 'rgb(25, 30, 32)' }}>
                    <Typography sx={{ margin: 'auto' }}>Made By Isaac Wallace</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Footer;