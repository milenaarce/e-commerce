import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => { 

    const currency = '$';
    const delivery_fee = 5;

    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    const [cartItems, setCartItems] = useState({});

    const navigate = useNavigate();

    const addToCart = async (itemId, language) => {

        if (!language) {
            toast.error('Select product language');
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][language]) {
                cartData[itemId][language] += 1;
            }
            else {
                cartData[itemId][language] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][language] = 1;
        }

        setCartItems(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0; 
        for (const livre in cartItems){
            for (const lang in cartItems[livre]) {
                try {
                    if (cartItems[livre][lang] > 0) {
                        totalCount += cartItems[livre][lang];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalCount
    }

    const updateQuantity = async (itemId, lang, quantity) => {

        let cartData = structuredClone(cartItems);

        cartData[itemId][lang] = quantity;

        setCartItems(cartData);
    }

    const getCartAmount = () => {

        let totalAmount = 0;

        for (const livre in cartItems){
            let itemInfo = products.find((product)=>product._id === livre);
            for (const lang in cartItems[livre]){
                try {
                    if (cartItems[livre][lang] > 0) {
                        totalAmount += itemInfo.price * cartItems[livre][lang];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmount
    }

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart,
        getCartCount, updateQuantity, getCartAmount,
        navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;