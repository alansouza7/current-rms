import { Link } from "react-router-dom"



const About = () => {
  return (
    <div >
        
        <div className='flex justify-center items-center gap-4'>
            <p className='text-center text-6xl font-bold'>We love</p>
   
            <Link to="/" className='btn btn-secondary mt-4 text-2xl font-bold'> RMS</Link>
       
        </div>
      <p className='mt-8 max-w-lg m-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque consectetur tempora similique
             facere est quasi quidem facilis blanditiis, qui incidunt, saepe quo
             ? Quae adipisci quam, nam laudantium provident id fugiat?</p>
    </div>
  )
}

export default About
