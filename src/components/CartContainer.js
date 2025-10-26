'use client'
import { useShopContext } from "@/app/contexts/ShopContext"
import CartCard from "@/components/CartCard"

const CartContainer = () => {
  const { cart } = useShopContext()
  return (
    <div className='flex flex-wrap mx-40 my-50 gap-6'>
      {cart.length > 0? (
        cart.map((product) => (
          <CartCard key={product._id || product.name} product={product}/>
        ))
      ):(
        <h2>no tenes nada en el carrito</h2>
      )}
    </div>
  )
}

export default CartContainer