"use client";
import axios from "axios";
import { useState, useEffect, useContext, createContext, useCallback } from "react";

const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  //aca va mi logica y funciones custom
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);

  const handleAddToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) =>
          item._id === product._id && item.selectedSize === product.selectedSize && item.selectedColor === product.selectedColor && item.selectedPrint === product.selectedPrint
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item._id === product._id && item.selectedSize === product.selectedSize && item.selectedColor === product.selectedColor && item.selectedPrint === product.selectedPrint
            ? { ...item, qty: item.qty + product.qty }
            : item
        );
      } else {
        return [...currentCart, product];
      }
    });
  };

  const removeFromCart = (product) => {
  setCart((currentCart) =>
    currentCart.filter(
      (item) =>
        !(
          item._id === product._id &&
          item.selectedSize === product.selectedSize &&
          item.selectedColor === product.selectedColor &&
          item.selectedPrint === product.selectedPrint
        )
    )
  );
};

  const getAllProducts = useCallback(async () => {
    try {
      //llamo a la api con los productos
      const res = await axios.get(`http://localhost:4000/products`);
      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  });

  const getOneProduct = useCallback(async (id) => {
    try {
      const res = await axios.get(`http://localhost:4000/products/${id}`);
      setProduct(res.data.product);
      return res.data.product;
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getProductsByCategory = useCallback(async (category) => {
    try {
      const res = await axios.get(`http://localhost:4000/categories/${category}/products`);
      console.log("API response:", res.data.products);
      setProducts(res.data.products);
      return res.data.products;
    } catch (error) {
      console.log(error);
    }
  }, [])

  useEffect(() => {
    getAllProducts();
  }, []);

  const cartQty = () => cart.length;

  const addOrder = async (userValues) => {
    const orderValues = {
      user: userValues,
      products: cart
    }
    console.log('my order is', orderValues)
  }

  return (
    <ShopContext.Provider
      value={{
        handleAddToCart,
        cart,
        cartQty,
        products,
        product,
        getAllProducts,
        getOneProduct,
        removeFromCart,
        addOrder
        getProductsByCategory
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShopContext must be used within a ShopContextProvider");
  }
  return context;
};

export default ShopContext;
