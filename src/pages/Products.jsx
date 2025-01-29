import React from 'react'
import ProductsContainer from '../components/ProductsContainer'
import PaginationContainer from '../components/PaginationContainer'
import Filters from '../components/Filters'
import { customFetch } from '../utils'
const url = '/products'


export const loader =async ({request}) => {
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries(),]) 

  const response = await customFetch(url,{params});
  const products = response.data.data;
  const meta = response.data.meta;
  return {products,meta,params};
}

const Products = () => {
  return (
    <>
      <Filters/>
      <ProductsContainer/>
      <PaginationContainer/>
    </>
  )
}

export default Products
