import { useRouter } from 'next/router'
import React, { useState } from "react";
import Link from "next/link";
import axios from 'axios'

const slug = (props) => {
    const router = useRouter()
    const { slug } = router.query 
    const [form, setForm] = useState({
        name: props.order.attributes.UserName,
        amount: props.order.attributes.amount,
        status: props.order.attributes.status,
        product: props.order.attributes.product,
      });
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
    const submit = async () => {
      axios.put("http://localhost:1337/api/orders/"+props.order.id, {
          data: {
            amount: form.amount,
            product: form.product,
            UserName: form.name,
            status: form.status
          },
        })
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
        router.push('/orders')
    };
    const delete_pro = async () => {
      axios.delete("http://localhost:1337/api/orders/"+props.order.id
        );
        alert("Product has been removed sucessfully")
        router.push('/orders')
    };
  return (
    <div className="mt-10 sm:mt-0 py-10 px-5">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <Link href={"/orders"}>
              <button
                type="button"
                className="w-full flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700 mb-3"
              >
                <svg
                  className="w-5 h-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
                <span>Go back</span>
              </button>
            </Link>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Order id : {props.order.attributes.Order_id}
            </h3>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="user_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.name}
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="amount"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Amount
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.amount}
                    type="number"
                    name="amount"
                    id="amount"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="status"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Status
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.status}
                    type="text"
                    name="status"
                    id="status"
                   
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="product"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Products
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.product}
                    type="text"
                    name="product"
                    id="product"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
                 onClick={delete_pro}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md me-2 text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Delete
                </button>
              <button
                 onClick={submit}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </div>
      </div>
      </div>
    </div>
  )
}
export async function getServerSideProps(context) {
    let a = await fetch("http://192.168.0.110:1337/api/orders?filters[Order_id]=" + context.query.slug + "&populate=*")
    let order = await a.json() 
    return {
    props: { order: order.data[0] },
    }
    }
    

export default slug
