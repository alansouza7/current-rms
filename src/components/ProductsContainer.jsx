import { useState } from "react"
import ProductsGrid from "./ProductsGrid"
import ProductsList from "./ProductsList"
import {BsGridFill, BsList} from 'react-icons/bs'



const ProductsContainer = () => {
  const [isGrid, setIsGrid] = useState(true)
 

  return (
    <div>
      <div className="flex mb-7 items-center">
        <p></p>

        <div className="ml-auto flex gap-2">
          <button className={isGrid? `text-2xl btn btn-circle btn-primary`:`btn btn-ghost text-2xl`} onClick={()=>setIsGrid(true)}><BsGridFill/></button>
          <button className={!isGrid? `text-2xl btn btn-circle btn-primary`:`btn btn-ghost text-2xl`}  onClick={()=>setIsGrid(false)}><BsList/></button>
        </div>
      </div>
      {isGrid?<ProductsGrid />: <ProductsList /> }
    </div>
  )
}

export default ProductsContainer
