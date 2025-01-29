import React from 'react'
import { useSelector } from 'react-redux'
import { formatPrice } from '../utils/index'

const CartTotals = () => {

    const {cartTotal,orderTotal,shipping,tax} = useSelector((state) => state.cartState);

  return (
    <div className='card bg-base-200'>
        <div className='card-body'>
            {/* SUBTOTAL */}
            <p className='flex justify-between text-xs border-b border-base pb-2'>
                <span>Subtotal</span>
                <span className='font-medium'>{formatPrice(orderTotal)}</span>
            </p>
            {/* SHIPPING */}
            <p className='flex justify-between text-xs border-b border-base pb-2'>
                <span>Shipping</span>
                <span className='font-medium'>{formatPrice(shipping)}</span>
            </p>
            {/* CARTTOTALS */}
            <p className='flex justify-between text-xs border-b border-base pb-2'>
                <span>CartTotal</span>
                <span className='font-medium'>{formatPrice(cartTotal)}</span>
            </p>
            {/* TAX */}
            <p className='flex justify-between text-sm mt-4 pb-2'>
                <span>Tax</span>
                <span className='font-medium'>{formatPrice(tax)}</span>
            </p>
        </div>
      
    </div>
  )
}

export default CartTotals
