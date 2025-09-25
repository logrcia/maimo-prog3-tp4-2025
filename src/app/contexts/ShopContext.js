'use client'
import { useState, useEffect, useContext, createContext } from 'react'

const ShopContext = createContext()

export const ShopContextProvider = ({children}) => {
	
	//aca va mi logica y funciones custom
	const [ cart, setCart ] = useState([])
    const addToCart = (title, image, id, price) => {
       const isInCart = cart.some(product => product.id === id)
       
       if(isInCart) {
        setCart(currentCart => currentCart.filter(product => product.id !== id));
       }else{
        setCart(currentCart => [
            ...currentCart, { title, image, id, price, quantity: 1 }
        ]);
       }
    }
	return(
	<ShopContext.Provider
		value={{
            cart,
            addToCart
		}}
	>
		{children}
	</ShopContext.Provider>
	
	)

}

export const useShopContext = () => {
	const context = useContext(ShopContext)
	if(!context){
		throw new Error ('useShopContext must be used within a ShopContextProvider')
	}
	return context;
}

export default ShopContext