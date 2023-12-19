import Link from 'next/link'
import React from 'react'

const orders = (props) => {
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
</button></Link><h1>Orders</h1></div>
    </div>
    <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
      <Link href={'/new_order'}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  + Add Order
</button></Link>
    </div>
  </div>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg my-2">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Order-Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Products
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        {props.orders.data.map((item)=>{return( <tr key={item.attributes.Order_id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.attributes.Order_id}
                </th>
                <td className="px-6 py-4">
                   {item.attributes.product}
                </td>
                <td className="px-6 py-4">
                    {item.attributes.status}
                </td>
                <td className="px-6 py-4">
                    ₹{item.attributes.amount}
                </td>
                <td className="px-6 py-4">
                    <Link href={`/orders/${item.attributes.Order_id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                </td>
            </tr>)})}
        </tbody>
    </table>
</div>
</div>

  )
}
export async function getServerSideProps(context) {
    let a= await fetch('https://healing-cuddle-a2a1780b28.strapiapp.com/api/orders?populate=*')
     let orders = await a.json()
    return {
    props: {orders},
    }
    }

export default orders
