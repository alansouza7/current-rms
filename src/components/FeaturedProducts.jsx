import { Link } from 'react-router-dom'
import {SectionTitle} from './index'
import { formatPrice } from '../utils'
import { useLoaderData } from "react-router-dom";

const FeaturedProducts = () => {

  const {products} = useLoaderData()
  
  return (<div className='mt-20'>
    <SectionTitle text="featured products" />
    <div className='gridCustom gap-8 shadow'>
        {products.slice(0,3).map(product =>{
            const {id, name, rental_rate, icon} = product
            return <Link key={id} to={`/${id}`}> 
            <div className='card shadow p-4 flex justify-center items-center gap-4' >
                <div className=''><img className='card w-[220px] h-[180px]' src={icon.url} alt="product featured" /></div>
                    <h2 className='text-lg font-semibold'>{name}</h2>
                    <p>{formatPrice(rental_rate.price)}</p>
            </div>
            </Link>
        })}
    </div>
  </div>
    
  )
}

export default FeaturedProducts
