import { useContext } from "react";
import { Button } from "react-bootstrap";
import { MyContextData } from "../../Context/MyContextData";
import "./Carrito.css"

const Carrito = () => {
  const {Pedido, Total, functionAdd, funtionDelete} = useContext(MyContextData);
  
  return (
    <div className="container viewCarrito d-flex flex-column gap-3 flex-wrap justify-content-center">
      <h3>Detalle del pedido:</h3>
      
      {Pedido.map((pizza) => (
            <div key={pizza.id} className="d-flex carContainer justify-content-between gap-3 container flex-wrap"> 
              <div className="d-flex gap-3 imgandprinceContainer">
                  <div className="imgContainer" style={{ backgroundImage: `url(${pizza.img})`}}></div>
                  <p className="princeandcount">{pizza.name}</p>
              </div>
              <div className="d-flex gap-3  justify-content-center">
                <p className="princeandcount">${pizza.price.toLocaleString("en-US")}</p>
                <Button variant="light" onClick={() => funtionDelete(pizza)}><i className="fa-solid fa-trash"></i></Button>
                <p className="princeandcount">{pizza.cant}</p>
                <Button variant="light" onClick={() => functionAdd(pizza) }><i className="fa-solid fa-plus"></i></Button>
              </div>
            </div>
      ))
      }
      
      {Total > 0 ? <p className="totalPrice">Total: <span>${(Total.toLocaleString("en-US"))}</span></p> : <p className="totalPrice">No hay ningun producto en el carrito</p>}
      <div className="ButtonPayContainer d-flex gap-3 justify-content-start">
      <Button variant="primary" style={{width: '100px'}} onClick={() => window.history.back()}>Atras</Button>
      <Button variant="success" style={{width: '100px'}}>Ir a Pagar</Button>
      </div>
    </div>
    
  )
}

export default Carrito
