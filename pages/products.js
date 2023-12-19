import React from 'react'
import Link from 'next/link'

const products = (props) => {
  return (
    <div>
      <div className=" px-5  mx-auto flex items-center md:flex-row flex-col">
    <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
      <div className="md:text-3xl text-2xl font-medium title-font text-gray-900">
      <Link href={'/'}><button type="button" className="w-full flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700 my-3">
    <svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
    </svg>
    <span>Go back</span>
</button></Link><h1>Products</h1></div>
    </div>
    <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
      <Link href={'/new_product'}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  + Add Products
</button></Link>
    </div>
  </div>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-7 mx-auto">
    <div className="flex flex-wrap -m-4">
      {props.products.data.map((item)=>{return(<div key={item.attributes.Productid}  className="lg:w-1/4 md:w-1/2 p-4 w-full border-2">
        <Link href={`/products/${item.attributes.Productid}`} className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.attributes.image_url}/>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.attributes.category}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{item.attributes.name}</h2>
          <p className="mt-1">₹{item.attributes.price}</p>
          <p className="mt-1">Available qty: {item.attributes.Available_qty}</p>
        </div>
      </div>)})}
    </div>
  </div>
</section>
</div>
  )
}
export async function getServerSideProps(context) {
  let a= await fetch('https://healing-cuddle-a2a1780b28.strapiapp.com/api/products?populate=*')
   let products = await a.json()
  return {
  props: {products},
  }
  }
  

export default products
