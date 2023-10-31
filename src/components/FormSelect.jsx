import { getGroup } from "../features/filter/filterSlice"
import {useDispatch} from 'react-redux'



const FormSelect = ({label, name, list, defaultValue, size, value}) => {

  const dispatch = useDispatch()
  
  const handleSelect = (e) =>{
    dispatch(getGroup(e.target.value))
  }

    const groupsArray = list.map(groups=>{
        return groups.product_group.name
    })
    const uniqueGroups = [...new Set(groupsArray)]

  return (
    <div>
          <div className="form-control w-full max-w-xs">
             <label htmlFor={name} className="label">
              <span className="label-text capitalize">{label}</span>
                </label>
                <select value={value} onChange={handleSelect}  name={name} id={name} className={`select select-bordered ${size}`}>
                    <option>all</option>
                    {uniqueGroups.map((group, index)=>{
                        return <option key={index}>{group}</option>
                    })}
           
                </select>
               
                </div>
    </div>
  )
}

export default FormSelect
