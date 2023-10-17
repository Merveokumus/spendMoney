import React from 'react'
import Product from './Product';

export default function BasketItem({ item, product }) {
    return (
        <>
            <li className='basket-item'>
                {product.title} x <span>{item.amount}</span>
            </li>
        </>
    )
}
