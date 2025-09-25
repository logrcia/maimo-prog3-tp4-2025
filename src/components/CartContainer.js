'use client'
import { useShopContext } from '@/app/contexts/ShopContext';
const CartContainer = () => {
    const { cart, addToCart } = useShopContext()
  return (
    <div className='mt-50 mb-50'>
        Acá van todos los productos agregados al carrito.
    </div>
  )
}

export default CartContainer