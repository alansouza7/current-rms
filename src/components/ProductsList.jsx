import { Link, useLoaderData } from 'react-router-dom'
import { formatPrice } from '../utils'

const ProductsList = () => {
    const {products} = useLoaderData()
  
    return (
      <div className='grid gap-8 shadow'>
          {products.map(product =>{
              const {id, name, rental_rate, icon, product_group} = product
              return <Link  key={id} to={`/${id}`}> 
              <div className='card shadow p-4 flex lg:flex-row gap-10 flex-wrap' >
                  <div className=''><img className='card w-[220px] h-[180px]' src={icon.url} alt="product featured" /></div>
                    <div>
                      <h2 className='text-2xl font-semibold'>{name}</h2>
                      <h4>{product_group.name}</h4>
                    </div>
                      <p className='lg:ml-[auto]'>{formatPrice(rental_rate.price)}</p>
              </div>
              </Link>
          })}
      </div>
    )
}

export default ProductsList
