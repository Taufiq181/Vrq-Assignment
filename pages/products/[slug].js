import { Content } from 'next/font/google'
import { useRouter } from 'next/router'
import React from 'react'

const slug = (props) => {
    const router = useRouter()
    const { slug } = router.query 
    console.log(props.product.attributes.category)
  return (
    <div>
       no
    </div>
  )
}
export async function getServerSideProps(context) {
    let a = await fetch("http://192.168.0.110:1337/api/products?filters[Productid]=" + context.query.slug + "&populate=*")
    let product = await a.json() 
    return {
    props: { product: product.data[0] },
    }
    }
    

export default slug
