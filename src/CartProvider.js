import { useState, createContext } from "react";
import { enqueueSnackbar } from 'notistack';

export const cartContext = createContext();

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const changeCart = (list) => {
        try {
            setCart(list);
            enqueueSnackbar("Successfully Added Item To Cart!", { variant: "success" });
        } catch(err) {
            enqueueSnackbar("An Error Has Occurred", { variant: "error" });
        }
    }

    const addToCart = (item) => {
        try {
            let cartItems = cart;

            cartItems.push(item);

            setCart(cartItems);
            enqueueSnackbar("Successfully Added Item To Cart!", { variant: "success" });
        } catch (err) {
            enqueueSnackbar("An Error Has Occurred", { variant: "error" });
        }
    }

    const removeFromCart = (index) => {
        try {
            let cartItems = cart;
            cartItems.splice(index, 1);

            let test = cartItems.map((data, Newindex) => {
                if(Newindex >= index) {
                    data.id -= 1;
                    return data;
                }
                return data;
            });

            console.log(test);

            setCart(cartItems);
            enqueueSnackbar("Item Removed From Cart", { variant: "info" });
        } catch (err) {
            enqueueSnackbar("An Error Has Occurred", { variant: "error" });
        }
    }

    return (
        <cartContext.Provider value={{ cart, changeCart, addToCart, removeFromCart }}>
            {children}
        </cartContext.Provider>
    );
}

export default CartProvider;