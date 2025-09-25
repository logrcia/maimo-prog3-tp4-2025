'use client'
import { useState, useEffect, useContext, createContext } from 'react'

const ShopContext = createContext()

export const ShopContextProvider = ({children}) => {
	
	//aca va mi logica y funciones custom
	
	return(
	<ShopContext.Provider
		value={{
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