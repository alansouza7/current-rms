import {Link, useRouteError} from 'react-router-dom'


const Error = () =>{
  const error = useRouteError()

  if(error.status === 404){
    return <main className='min-h-screen text-center flex items-center justify-center'>
      <div>
      <p className="text-9xl font-semibold text-primary">404</p>
      <h3 className='m-4 text-4xl font-semibold text-gray-600'>Page not found</h3>
      <p className='leading-normal mt-2 mb-4 text-gray-500 '>Sorry, we couldn't find the page you are looking for</p>
      <Link className='text-slate-50 font-bold uppercase btn btn-primary mt-5' to="/">Go Back Home </Link>
      </div>
   
  </main>
  }

return (
 <div>
   <div className='min-h-screen flex items-center justify-center '>
      <h3 className='text-5xl'>Something went wrong</h3>
   </div>
 </div>
)
  
}

export default Error

