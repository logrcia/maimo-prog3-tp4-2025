'use client';
import { useShopContext } from '@/app/contexts/ShopContext'
import { CheckoutForm } from './FormCheckout'
import { useState } from 'react'

const CheckoutContainer = () => {
    const { cart, addOrder, clearCart } = useShopContext();
    const [showModal, setShowModal] = useState(false)
    const [orderData, setOrderData] = useState(null)

    const handleAddOrder = async (values) => {
        const result = await addOrder(values)
        if (result) {
            setOrderData(result)
            setShowModal(true)
        }
    }

    const handleCloseModal = () => {
        setShowModal(false)
        clearCart()  
    }

  return (
    <>
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
                  <div className="text-gray-500">${product.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {showModal && orderData && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-10 max-w-lg w-full mx-4 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-light text-gray-900 mb-2">Order Confirmed</h2>
              <p className="text-gray-500 text-sm">Thank you for your purchase</p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Order Number</p>
                <p className="font-mono text-lg font-medium">{orderData.orderNumber}</p>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Customer Details</p>
                <div className="space-y-1">
                  <p className="font-medium text-gray-900">{orderData.user.name}</p>
                  <p className="text-gray-600 text-sm">{orderData.user.email}</p>
                  <p className="text-gray-600 text-sm">{orderData.user.phone}</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Order Summary</p>
                <div className="space-y-2">
                  {orderData.products.map((product) => (
                    <div key={product._id} className="flex justify-between items-center text-sm">
                      <span className="text-gray-700">
                        {product.name} <span className="text-gray-400">×{product.qty}</span>
                      </span>
                      <span className="font-medium">${(product.price * product.qty).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 mt-4 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-medium">Total</span>
                    <span className="text-2xl font-light">${orderData.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleCloseModal}
              className="w-full mt-8 bg-black text-white py-4 rounded-full hover:bg-gray-800 transition-all duration-200 font-medium"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutContainer