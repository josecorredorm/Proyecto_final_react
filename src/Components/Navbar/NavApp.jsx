import { Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import "./NavApp.css"


const NavApp = () => {
  return (
    <Navbar className="navContainer d-flex d-flex justify-content-between px-5" bg="dark" variant="dark">
        <NavLink className="links" to="/"><img className="IconImg" src="./icon.png" alt="icon_pizza" /> Pizzeria Mamma mia!</NavLink>
         <div className="d-flex gap-3"> 
            <NavLink className="links" to="/home">Home</NavLink>
            <NavLink className="links" to="/carrito">Carrito</NavLink>
         </div>
    </Navbar>
  )
}
export default NavApp
