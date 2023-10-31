import { useRouteError } from "react-router-dom"


const ErrorElement = () => {
  const error = useRouteError()
  return (
    <h2 className="grid place-items-center">{error.message}</h2>
  )
}

export default ErrorElement
