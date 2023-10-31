import { Link } from "react-router-dom"
import { useLoaderData } from "react-router-dom";


const Hero = () => {
    const {products} = useLoaderData()
   
  return (
<div className="hero">
    <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="lg:carousel h-[28rem] hidden  carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box ">
            {products.map(product=>{
                return <div key={product.id} className="carousel-item ">
                    <img src={product.icon.url} className="rounded-box object-cover" />
                </div>
            })}
        </div>
            <div>
                <h1 className="text-5xl lg:text-7xl font-bold">We are changing the way people rent</h1>
                <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <Link to="/products" className="btn btn-primary font-bold">our products</Link>
            </div>
    </div>
</div>
  )
}

export default Hero
