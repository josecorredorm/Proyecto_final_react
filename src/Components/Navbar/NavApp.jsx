import { Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import "./NavApp.css"
import { useContext } from "react"
import { MyContextData } from "../../Context/MyContextData"
import Container from 'react-bootstrap/Container';

const NavApp = () => {
  const {Total, Pedido} = useContext(MyContextData)
  return (
    <Navbar   expand="lg" className="navContainer" bg="dark" variant="dark" fixed="top">
        <Container className="d-flex justify-content-between">
        <Navbar.Brand><NavLink className="links" to="/"><img className="IconImg" src="./icon.png" alt="icon_pizza" /> <span className="verdelogo">Piz</span><span className="blancologo">ze</span><span className="rojologo">ría</span> Mamma mia!</NavLink></Navbar.Brand>
        <div>
        
        
          <NavLink className="links" to="/carrito"><i className="fa-solid fa-cart-shopping"></i>({Pedido.reduce((acc, item) => acc + item.cant, 0)}): ${Total.toLocaleString("en-US")}</NavLink>
          
        
        </div>
      </Container>
        
        
        
        
        
        
        
        
        
        {/* <NavLink className="links" to="/"><img className="IconImg" src="./icon.png" alt="icon_pizza" /> Pizzeria Mamma mia!</NavLink>
         <div className="d-flex gap-3"> 
          <NavLink className="links" to="/carrito">Carrito({Pedido.reduce((acc, item) => acc + item.cant, 0)}): ${Total.toLocaleString("en-US")}</NavLink>
         </div> */}
    </Navbar>
  )
}
export default NavApp
