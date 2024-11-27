import React from 'react'
import StarIcon from '@mui/icons-material/Star';



const products = [
    {
      id: 1,
      name: 'card less t shirt contton balck popcorn ggjsdgb ',
      href: '#',
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '1800.00',
      color: 'Black',
      installment:'600.00',
    },
    {
        id: 1,
        name: 'card less t shirt contton balck popcorn ggjsdgb ',
        href: '#',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '1800.00',
        color: 'Black',
        installment:'600.00',
      },
    // More products...
  ]
  

const Productlist = () => {
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-left">Trending</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <img
              alt={product.imageAlt}
              src={product.imageSrc}
              className="aspect-square w-[235px] h-[245px] rounded-3xl bg-gray-200 object-cover group-hover:opacity-75 "
            />
            <div className="mt-4 grid text-left justify-between">
              <div>
                <h3 className="text-[20px] text-black leading-none">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
              </div>
              <div className='flex'>
                <StarIcon className='text-yellow-500'/>
                <StarIcon className='text-yellow-500'/>
                <StarIcon className='text-yellow-500'/>
                <StarIcon className='text-yellow-500'/>
                <StarIcon className='text-yellow-500'/>
                </div>
              <p className="text-[24px] font-medium text-gray-900">LKR {product.price}</p>
              <p className='bg-[#8DD4F1] w-[90px]'>Installment</p>
              <p className="text-[24px] font-medium text-gray-900">LKR {product.installment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Productlist