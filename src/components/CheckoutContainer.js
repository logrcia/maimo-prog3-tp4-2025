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
    <section className='max-w-[1200px] my-0 mx-auto py-3 pt-50'>
        <div className='grid grid-cols-12'>
            <div className='col-span-6 flex justify-center items-center'>
                <CheckoutForm handleAddOrder={handleAddOrder}/>
            </div>
            <div className='col-span-6 flex justify-center items-start'>
                <h2>PEDIDO</h2>
                <div>
                {cart.map((product) => (
                    <div key={product._id}
                    className='border-8 border-solid border-gray-100 p-2 m-2 w-100'>
                        <h3>{product.name}</h3>
                        <p> cantidad: {product.qty}</p>
                    </div>
                ))}
                </div>
                <button onClick={()=>handlePlaceOrder()}>place holder</button>
            </div>
        </div>
    </section> 
  );
};

export default CheckoutContainer