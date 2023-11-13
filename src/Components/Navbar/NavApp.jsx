import { Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import "./NavApp.css"
import { useContext } from "react"
import { MyContextData } from "../../Context/MyContextData"


const NavApp = () => {
  const {Total} = useContext(MyContextData)
  return (
    <Navbar className="navContainer d-flex d-flex justify-content-between px-5" bg="dark" variant="dark">
        <NavLink className="links" to="/"><img className="IconImg" src="./icon.png" alt="icon_pizza" /> Pizzeria Mamma mia!</NavLink>
         <div className="d-flex gap-3"> 
            <NavLink className="links" to="/carrito">Carrito: ${Total}</NavLink>
         </div>
    </Navbar>
  )
}
export default NavApp
