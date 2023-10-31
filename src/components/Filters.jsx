import { Form, useLoaderData } from "react-router-dom"
import FormInput from "./FormInput"
import FormSelect from "./FormSelect"
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { clearFilters } from "../features/filter/filterSlice"

const Filters = () => {

  const {products} = useLoaderData()
  const { name, group} = useSelector((state) => state.filter);
  const dispatch = useDispatch()

  return (
    <Form className="shadow rounded-2xl bg-base-200 items-end grid justify-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mb-5">
      {/* SEARCH */}
      <FormInput value={name} defaultValue={name}  name="search" type="search"  label="search product" size="input-md"  />

      {/* GROUPS */}
      <FormSelect value={group} defaultValue={group} name="group" label="group" size="select-md"  list={products}  />

      {/* BUTTONS */}
      <button onClick={()=> dispatch(clearFilters())} className="btn btn-secondary btn-block">reset</button>
    </Form>
  )
}

export default Filters
