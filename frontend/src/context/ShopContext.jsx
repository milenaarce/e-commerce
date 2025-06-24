import { createContext, useEffect, useState } from "react";
/* import { products } from "../assets/assets"; */
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export const ShopContext = createContext();

const ShopContextProvider = (props) => { 

    const currency = '$';
    const delivery_fee = 5;

    const backendURL = import.meta.env.VITE_BACKEND_URL;

    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    const [cartItems, setCartItems] = useState({});

    const [products, setProducts] = useState([]);

    const [token, setToken] = useState('');

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

        if (token) {
            try {

                await axios.post(backendURL + '/api/cart/add', {itemId, language}, {headers: {token}})

            } catch (error) {
                
                console.log(error)
                toast.error(error.message)

            }
        }
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

        if (token) {
            try {

                await axios.post(backendURL + '/api/cart/update', {itemId, lang, quantity}, {headers: {token}})

            } catch (error) {
                
                console.log(error)
                toast.error(error.message)
                
            }
        }
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

    const getProductsData = async () => {
        try {
            console.log(backendURL)

            const response = await axios.get(backendURL + '/api/product/list');
            
            if(response.data.success){
                setProducts(response.data.products);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    const getUserCart = async (token) => {
        try {
            const response = await axios.post(backendURL + '/api/cart/get', {}, {headers:{token}})

            if (response.data.success) {
                setCartItems(response.data.cartData)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(()=>{
        getProductsData()
    }, [])

    useEffect(()=> {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
            getUserCart(localStorage.getItem('token'))
        }
    }, [])

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, setCartItems, addToCart,
        getCartCount, updateQuantity, getCartAmount,
        navigate,
        backendURL,
        setToken, token
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;