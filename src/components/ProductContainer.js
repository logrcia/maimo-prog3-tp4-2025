"use client";

import { useShopContext } from "@/app/contexts/ShopContext";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const ProductContainer = ({ params }) => {
  const { getOneProduct, product, handleAddToCart, removeFromCart, cart } =
    useShopContext();

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedPrint, setSelectedPrint] = useState(""); // Primer estampado por defecto
  const [qty, setQty] = useState(1);
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [image, setImage] = useState("");

  // Traer el producto de la API
  useEffect(() => {
    const fetchProduct = async () => {
      if (!params) return;

      const resolvedParams = await params;
      if (resolvedParams?.id) getOneProduct(resolvedParams.id);
    };
    fetchProduct();
  }, []);

  useEffect(() => {
    if (product?.color && product.color.length > 0) {
      setSelectedColor(product.color[0]); // asigna el primer color como default
    }
  }, [product]);

  useEffect(() => {
    if (product?.price) {
      setSelectedPrice(product.price);
    }
  }, [product]);
useEffect(() => {
  if (product?.print && product.print.length > 0) {
    setSelectedPrint(product.print[0]); // asigna el estampado color como default
  }
}, [product]);

useEffect(() => {
  if (product?.price) {
    setSelectedPrice(product.price);
  }
}, [product]);

  // Actualizar imagen según color y estampado
  useEffect(() => {
    if (!product?.name) return;
    const printFormatted = String(selectedPrint || "").split(" ").join("");
    const colorFormatted = String(selectedColor || "").split(" ").join("").toLowerCase();
    const newImage = `${product.name.split(" ").join("").toLowerCase()}${printFormatted}${colorFormatted}.png`;

    setImage(newImage);
  }, [product, selectedColor, selectedPrint]);

  // Función para agregar al carrito
  const addToCart = (product) => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    if (!selectedColor) {
      alert("Please select a color");
      return;
    }

    const productToAdd = {
      ...product,
      qty,
      selectedSize,
      selectedColor,
      selectedPrint,
      selectedPrice,
      image,
    };

    handleAddToCart(productToAdd);
  };

  const isInCart = cart.some(
    (item) =>
      item._id === product._id &&
      item.selectedSize === selectedSize &&
      item.selectedColor === selectedColor &&
      item.selectedPrint === selectedPrint
  );

  return (
    <div className="flex mx-15 mt-50 mb-50 justify-center items-center">
      {/* Imagen del producto */}
      <div className="w-[600px] h-[600px]">
        <Image
          src={`/dummy-images/products/${image}`}
          width={600}
          height={600}
          alt={`${product.name}`}
          priority
        />
      </div>

      <div className="ml-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-xl mt-2">${selectedPrice}</p>
        </div>

        <div className="w-100 mb-10">
          <p>{product.description}</p>
        </div>

        <div>
          <h2>Quantity</h2>
          <div className="px-4 py-2 border mt-2 w-fit mb-8">
            <button
              onClick={() => {
                setQty((prevQty) => {
                  const newQty = Math.max(prevQty - 1, 1);
                  setSelectedPrice(product.price * newQty);
                  return newQty;
                });
              }}
              className="cursor-pointer"
            >
              -
            </button>
            <span className="mx-2">{qty}</span>
            <button
              onClick={() => {
                setQty((prevQty) => {
                  const newQty = prevQty + 1;
                  setSelectedPrice(product.price * newQty);
                  return newQty;
                });
              }}
              className="cursor-pointer"
            >
              +
            </button>
          </div>
        </div>

        <div>
          {product.size && product.size.length > 0 ? (
            product.size.map((size) => (
              <button
                key={size}
                className={`px-4 py-2 mr-2 rounded-2xl mt-2 w-fit mb-8 cursor-pointer ${
                  selectedSize === size ? "bg-neutral-800 text-white" : "border hover:bg-gray-300"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))
          ) : (
            <p>No sizes available</p>
          )}
        </div>

        {/* Colores */}
        <div className="mb-4">
          {product.color && product.color.length > 0 ? (
            product.color.map((color) => (
              <button
                key={color}
                className={`px-4 py-2 mr-2 rounded-2xl mt-2 w-fit mb-8 cursor-pointer ${
                  selectedColor === color ? "bg-neutral-800 text-white" : "border hover:bg-gray-300"
                }`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </button>
            ))
          ) : (
            <p>No color available</p>
          )}
        </div>
        
        {/* Estampados */}
        <div className="w-100">
          <h2 className="mb-2">Print</h2>
          {product.print && product.print.length > 0 ? (
            product.print.map((print) => (
              <button
                key={print}
                className={`px-4 py-2 mr-2  rounded-2xl  w-fit mb-2 cursor-pointer ${
                selectedPrint === print ? "bg-neutral-800 text-white" : "border hover:bg-gray-300"
              }`}
               onClick={() => setSelectedPrint(print)}
            >
              {print}
              </button>
            ))
          ) : (
            <p>No print available</p>
          )}
 
        </div>

        <p className="mt-4 mb-4">Ships on or before September 8, 2025</p>

        <button
          className="bg-black text-white mt-5 w-full py-4 rounded-2xl font-semibold hover:bg-gray-400 hover:text-black transition-colors"
          onClick={() => {
            if (isInCart) {
              removeFromCart({
                ...product,
                selectedSize,
                selectedColor,
                selectedPrint,
              });
            } else {
              addToCart(product);
            }
          }}
        >
          {isInCart ? "Remove from cart" : "Add to cart"}
        </button>
        <div className="mt-6">
          <Link
            href={`/checkout`}
            className="block bg-gray-400 text-black w-full py-4 rounded-2xl text-center font-semibold hover:bg-gray-100 transition-colors"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
