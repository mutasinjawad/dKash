import React from 'react'
import { Link } from 'react-router-dom'

const NewUser = () => {

    const popularProducts = [
        {
            id: '3432',
            product_name: 'Macbook M1 Pro 14"',
            product_thumbnail: 'https://source.unsplash.com/100x100?macbook',
            product_price: '$1499.00',
            product_stock: 341
        },
        {
            id: '7633',
            product_name: 'Samsung Galaxy Buds 2',
            product_thumbnail: 'https://source.unsplash.com/100x100?earbuds',
            product_price: '$399.00',
            product_stock: 24
        },
        {
            id: '6534',
            product_name: 'Asus Zenbook Pro',
            product_thumbnail: 'https://source.unsplash.com/100x100?laptop',
            product_price: '$899.00',
            product_stock: 56
        },
        {
            id: '9234',
            product_name: 'LG Flex Canvas',
            product_thumbnail: 'https://source.unsplash.com/100x100?smartphone',
            product_price: '$499.00',
            product_stock: 98
        },
        {
            id: '4314',
            product_name: 'Apple Magic Touchpad',
            product_thumbnail: 'https://source.unsplash.com/100x100?touchpad',
            product_price: '$699.00',
            product_stock: 0
        },
        {
            id: '4342',
            product_name: 'Nothing Earbuds One',
            product_thumbnail: 'https://source.unsplash.com/100x100?earphone',
            product_price: '$399.00',
            product_stock: 453
        }
    ]

  return (
    <div className='bg-white p-4 mt-4 rounded-sm border border-gray-200 w-[20rem]'>
        <strong className='text-primaryColor text-[18px] font-[800]'>New Users</strong>
        <div className='mt-4 flex flex-col gap-3'>
            {popularProducts.map((product) => (
                <Link key={product.id} to={`/admin/products/${product.id}`} className='flex hover:no-underline'>
                    <div className='w-8 h-8 min-w-10 bg-gray-200 rounded-md overflow-hidden'>
                        <img className='w-full h-full object-cover' src={product.product_thumbnail} alt={product.product_name} />
                    </div>
                    <div className='ml-4 flex-1'>
                        <p className='text-[12px] text-gray-700'>{product.product_name}</p>
                        <p className='text-[12px] text-gray-700'>{product.product_price}</p>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default NewUser