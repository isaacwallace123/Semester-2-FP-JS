import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AppBar, Box, Typography, Toolbar, Button, IconButton, Badge } from '@mui/material';

import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { cartContext } from "../CartProvider";

function Header() {
    const { cart } = useContext(cartContext);
    const navigate = useNavigate();

    function navigateProducts() {
        navigate('/products');
    }

    function navigateCart() {
        navigate('/cart');
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar sx={{ backgroundColor: 'rgb(25, 30, 32)' }}>
                    <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}><MenuIcon /></IconButton>
                    <Button onClick={navigateProducts} sx={{ my: 2, color: 'white', display: 'block' }}>PRODUCTS</Button>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />

                    <IconButton size='large' edge='start' color='inherit' aria-label='cart' sx={{ mr: 2 }} onClick={navigateCart}>
                        <Badge badgeContent={cart.length} color="primary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>

                    <IconButton size='large' edge='start' color='inherit' aria-label='profile' sx={{ mr: 2 }}><AccountCircle /></IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;