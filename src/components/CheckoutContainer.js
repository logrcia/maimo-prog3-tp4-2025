'use client';
import { useShopContext } from '@/app/contexts/ShopContext'
import { CheckoutForm } from './FormCheckout'

const CheckoutContainer = () => {
    const { cart, addOrder } = useShopContext();

    const handlePlaceOrder = () => {
        console.log('my order')
    }

    const handleAddOrder = (values) => {
        console.log(values)
        addOrder(values)
    }

  return (
    <section className="max-w-[1200px] mx-auto py-12 px-4">
  <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
    
    <div className="md:col-span-6 flex justify-center">
      <CheckoutForm handleAddOrder={handleAddOrder} />
    </div>

    <div className="md:col-span-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-30">Your order</h2>
      
      <div className="space-y-4">
        {cart.map((product) => (
          <div
            key={product._id}
            className="border border-gray-300 rounded-xl p-4 bg-gray-50 flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold text-gray-700">{product.name}</h3>
              <p className="text-gray-600">Cantidad: {product.qty}</p>
            </div>
            <div className="text-gray-500">{product.price}</div>
          </div>
        ))}
      </div>

      <button
        onClick={() => handlePlaceOrder()}
        className="w-full bg-gray-500 text-black font-semibold py-3 rounded-xl hover:bg-gray-400 transition-colors shadow-md mt-5"
      >
        Place order
      </button>
    </div>

  </div>
</section>

  );
};

export default CheckoutContainer