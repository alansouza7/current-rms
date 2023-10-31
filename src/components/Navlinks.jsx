import { NavLink } from "react-router-dom";

const links = [
  {id:1, url: "/", text: "home"},
  {id:2, url: "/about", text: "about"},
  {id:3, url: "/products", text: "products"},
  {id:4, url: "/cart", text: "quote"},

]

const Navlinks = () => {
  return (
    < >

    {links.map(link=>{
      const {id, url, text} = link
      return <li className=" list-none" key={id}>
        <NavLink className="btn hover:btn-base-200 btn-ghost text-sm lg:text-xl capitalize pt-3 lg:pt-0" to={url}>{text}</NavLink>
      </li>
    })}
     
    </>
  )
}

export default Navlinks
