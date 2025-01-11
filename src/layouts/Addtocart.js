import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import StarIcon from '@mui/icons-material/Star';

function Addtocart() {

    const products = [
        {
            "id": 1,
            "title": "Fjallraven - Foldsack ",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
                "rate": 3.9,
                "count": 120
            }
        },
        {
            "id": 2,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "price": 22.3,
            "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            "rating": {
                "rate": 4.1,
                "count": 259
            }
        },
        {
            "id": 3,
            "title": "Mens Cotton Jacket",
            "price": 55.99,
            "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            "rating": {
                "rate": 4.7,
                "count": 500
            }
        },
    ]
    return (
        <div className='mx-20'>
            <h1 className='font-bold text-3xl text-left mb-6'>Shopping Cart</h1>
            <div className='flex'>
                <div className='grid w-[50%]'>
                    {products.map((product) => {
                        return (
                            <div className='flex my-7 shadow-md relative'>
                                <div>
                                    <img src={product.image} alt={product.description} className='w-32 m-2' />
                                </div>
                                <div className='text-left mx-7'>
                                    <h2 className='text-xl font-bold'>{product.title}</h2>
                                    <h2 className='font-medium'>Quantity :</h2>
                                    <h3 className='text-lg font-bold'>Rs {product.price}</h3>
                                    <div className='flex'>
                                        <StarIcon className='text-yellow-500' />
                                        <StarIcon className='text-yellow-500' />
                                        <StarIcon className='text-yellow-500' />
                                        <StarIcon className='text-yellow-500' />
                                        <StarIcon className='text-yellow-500' />
                                    </div>
                                </div>
                                <div>
                                    <button className='text-red-600 absolute top-2 right-2'><RemoveCircleOutlineIcon /></button>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className='flex-col mx-20 my-7 px-10 bg-slate-100 text-left rounded-md w-[50%] h-80 divide-y'>
                    <h1 className='text-xl font-semibold pt-5'>Order summery</h1>
                    <div className='flex justify-between my-4'>
                        <h1 className='text-base font-normal'>SubTotal</h1>
                        <h2 className='text-base font-normal'>100.45</h2>
                    </div>
                    <div className='flex justify-between my-4'>
                        <h1 className='text-base font-normal'>shipping cost</h1>
                        <h2 className='text-base font-normal'>15.00</h2>
                    </div>
                    <div className='flex justify-between my-4'>
                        <h1 className='text-base font-normal'>tax</h1>
                        <h2 className='text-base font-normal'>10.99</h2>
                    </div>
                    <div className='flex justify-between my-4'>
                        <h1 className='text-base font-normal'>Order Total</h1>
                        <h2 className='text-base font-normal'>130.99</h2>
                    </div>
                    <button className='bg-[#8DD4F1] p-1 rounded-md w-full my-2 font-bold'>Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default Addtocart