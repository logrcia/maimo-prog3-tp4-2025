'use client'
import axios from 'axios'
import { useState, useEffect, useContext, createContext, useCallback } from 'react'

const ShopContext = createContext()

export const ShopContextProvider = ({children}) => {

	//aca va mi logica y funciones custom
	const [ cart, setCart ] = useState([])
	const [products, setProducts] = useState([])
	const [product, setProduct] = useState([])

	const handleAddToCart = (product) => {
		if(!product._id){
			setCart([...cart, product])
		}else{
			console.log("ya lo agregaste!!!")
		}
	}

	const getAllProducts = useCallback( async () => {
		try {
			//llamo a la api con los productos
			const res = await axios.get(`http://localhost:4000/products`)
			setProducts(res.data.products)

		} catch (error) {
			console.log(error)
		}
	})

	const getOneProduct = useCallback( async (id) => {
		try {
			const res = await axios.get(`http://localhost:4000/products/${id}`)
			setProduct(res.data.product)
			return res.data.product
		} catch (error) {
			console.log(error)
		}
	}, [])

	useEffect(()=>{
		getAllProducts()
	}, [])

	const cartQty = () => cart.length

	return(
	<ShopContext.Provider
		value={{
			handleAddToCart,
			cart,
			cartQty,
			products,
			product,
			getOneProduct
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