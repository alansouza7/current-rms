import {useDispatch} from 'react-redux'
import { getName } from "../features/filter/filterSlice"

const FormInput = ({label, name, type, defaultValue, size, value}) => {

  const dispatch = useDispatch()
  
  const handleInput = (e) =>{
    dispatch(getName(e.target.value))
  }

  return (
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text capitalize">{label}</span>
  </label>
  <input value={value} onChange={handleInput} type={type} name={name} placeholder="Type here" className={`input input-bordered w-full max-w-xs ${size}`}/>
</div>
  )
}

export default FormInput
