
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section className="text-gray-600 body-font h-full">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Inventory Management System
          <br className="hidden lg:inline-block"/>VRQ Technologies
        </h1>
        <p className="mb-8 leading-relaxed">This is made for Assignment purpose only . Created by  Taufiq Ahmed Ansari</p>
        <div className="flex justify-center">
          <Link href={'/products'}><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Products</button></Link>
          <Link href={'/orders'}><button className="ml-4 inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">Orders</button></Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="hero" src="https://vrqtech.net/static/media/logo.4477c8f3cb120f66e420.png"/>
      </div>
    </div>
  </section>
  )
}
