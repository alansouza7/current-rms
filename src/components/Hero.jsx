import { Link } from "react-router-dom"
import { useLoaderData } from "react-router-dom";


const Hero = () => {
    const {products} = useLoaderData()
   
  return (
<div className="hero">
    <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="lg:carousel h-[20rem] hidden  carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box ">
            {products.map(product=>{
                return <div key={product.id} className="carousel-item ">
                    <img src={product.icon.url} className="rounded-box " />
                </div>
            })}
        </div>
            <div>
                <h1 className="text-5xl lg:text-7xl font-bold">We are changing the way people rent</h1>
                <p className="py-6 ">We're changing the way we rent by putting you in control, offering a diverse range of products that cater to your unique needs and desires.<br></br><br></br> Whether it's the latest tech gadgets, furniture for your living space, or outdoor equipment for your adventures, we're here to provide a seamless and user-friendly renting experience.<br></br><br></br> Embrace a world where renting is a breeze, and where you have the power to adapt and enjoy the products you need, whenever you need them. Welcome to the future of renting, where choice, flexibility, and simplicity converge.</p>
                <Link to="/products" className="btn btn-primary font-bold">our products</Link>
            </div>
    </div>
</div>
  )
}

export default Hero
