import Link from "next/link";
import React, { useState } from "react";
import axios from 'axios' 

const new_product = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    img_url: "",
    category: "",
    available_qty: "",
  });
  let productId = Math.floor(100000 * Math.random());
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form.available_qty);
  };
  const submit = async () => {
    axios.post("http://localhost:1337/api/products", {
        data: {
          category: form.category,
        price: form.price,
        image_url: form.img_url,
        Available_qty: 12,
        name: form.name,
        Productid: productId,
        description: form.description
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
      console.log("Axios")
  };

  return (
    <div className="mt-10 sm:mt-0 py-10 px-5">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <Link href={"/products"}>
              <button
                type="button"
                className="w-full flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700 mb-3"
              >
                <svg
                  className="w-5 h-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
                <span>Go back</span>
              </button>
            </Link>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Add a Product
            </h3>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="product_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Product name
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
                      for="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Price
                    </label>
                    <input
                      onChange={handleChange}
                      value={form.price}
                      type="number"
                      name="price"
                      id="price"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      for="description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <input
                      onChange={handleChange}
                      value={form.description}
                      type="text"
                      name="description"
                      id="description"
                      autocomplete="email"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      for="img_url"
                      className="block text-sm font-medium text-gray-700"
                    >
                      image Url
                    </label>
                    <input
                      onChange={handleChange}
                      value={form.img_url}
                      type="text"
                      name="img_url"
                      id="img_url"
                      autocomplete="street-address"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      for="category"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Category
                    </label>
                    <input
                      onChange={handleChange}
                      value={form.category}
                      type="text"
                      name="category"
                      id="category"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      for="available_qty"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Available Quantity
                    </label>
                    <input
                      onChange={handleChange}
                      value={form.available_qty}
                      type="number"
                      name="available_qty"
                      id="available_qty"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
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
  );
};

export default new_product;
