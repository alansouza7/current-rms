import { Link } from "react-router-dom"



const About = () => {
  return (
    <div >
        
        <div className='flex justify-center items-center gap-4'>
            <p className='text-center text-6xl font-bold'>We love</p>
   
            <Link to="/" className='btn btn-secondary mt-4 text-2xl font-bold'> RMS</Link>
       
        </div>
      <p className='mt-8 max-w-lg m-auto'>At our innovative platform, we are transforming the way you rent products, ushering in a new era of convenience and accessibility. We believe in making the renting process not just a transaction, but an experience that enriches your life. We're changing the way we rent by putting you in control, offering a diverse range of products that cater to your unique needs and desires. Whether it's the latest tech gadgets, furniture for your living space, or outdoor equipment for your adventures, we're here to provide a seamless and user-friendly renting experience. Embrace a world where renting is a breeze, and where you have the power to adapt and enjoy the products you need, whenever you need them. Welcome to the future of renting, where choice, flexibility, and simplicity converge.</p>
    </div>
  )
}

export default About
