'use client';

import { useShopContext } from "@/app/contexts/ShopContext";
import { useState, useEffect } from "react";
import Image from "next/image";

const ProductContainer = ({ params }) => {
  const { getOneProduct, product, handleAddToCart } = useShopContext();

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedPrint, setSelectedPrint] = useState(1); // Primer estampado por defecto
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

  // Actualizar imagen según color y estampado
  useEffect(() => {
    
    if (!product?.name) return;

    const colorFormatted = selectedColor ? selectedColor.split(" ").join("").toLowerCase() : "";
    const newImage = `${product.name.toLowerCase()}${selectedPrint}${colorFormatted}.png`;

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
      selectedPrice
    };


    handleAddToCart(productToAdd);
  };

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

      {/* Info y opciones */}
      <div className="ml-10">
        {/* Nombre y precio */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-xl mt-2">${selectedPrice}</p>
        </div>

        {/* Descripción */}
        <div className="w-100 mb-10">
          <p>{product.description}</p>
        </div>

        {/* Cantidad */}
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

        {/* Talles */}
        <div>
          {product.size && product.size.length > 0 ? (
            product.size.map((size) => (
              <button
                key={size}
                className={`px-4 py-2 mr-2 border mt-2 w-fit mb-8 cursor-pointer ${
                  selectedSize === size ? "bg-black text-white" : ""
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
        <div>
          {product.color && product.color.length > 0 ? (
            product.color.map((color) => (
              <button
                key={color}
                className={`px-4 py-2 mr-2 border mt-2 w-fit mb-8 cursor-pointer ${
                  selectedColor === color ? "bg-black text-white" : ""
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
        <div>
          {[1, 2].map((print) => (
            <button
              key={print}
              className={`px-4 py-2 mr-2 border mt-2 w-fit mb-8 cursor-pointer ${
                selectedPrint === print ? "bg-black text-white" : ""
              }`}
              onClick={() => setSelectedPrint(print)}
            >
              Estampado {print}
            </button>
          ))}
        </div>

        <p>Ships on or before September 8, 2025</p>

        {/* Botón agregar al carrito */}
        <button
          className="bg-black text-white mt-5 w-full py-5 rounded-4xl cursor-pointer"
          onClick={() => addToCart(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductContainer;
