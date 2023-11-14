import { useContext } from "react";
import { MyContextData } from "../Context/MyContextData";
import { Button } from "react-bootstrap";

const Carrito = () => {
  const {Pedido, Total, functionAdd, funtionDelete} = useContext(MyContextData);
  
  return (
    <div style={{marginTop: '150px'}} className="container d-flex flex-column gap-3 flex-wrap w-100 justify-content-center">
      <h3>Detalle del pedido:</h3>
      {Pedido.map((pizza) => (
        <div key={pizza.id} className="d-flex justify-content-between gap-3">
            <div className="d-flex gap-3 ">
                  <div style={{width: '50px', height: '50px', backgroundImage: `url(${pizza.img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <p>{pizza.name}</p>
            </div>
            <div className="d-flex gap-3  justify-content-center">
              <p>${pizza.price}</p>
              <Button variant="danger" onClick={() => funtionDelete(pizza)}>Eliminar</Button>
              <p>{pizza.cant}</p>
              <Button variant="success" onClick={() => functionAdd(pizza) }>Añadir</Button>
            </div>
        </div>
      ))
      }
      {Total > 0 ? <p style={{fontWeight: 'bold', fontSize: '20px'}}>Total: <span>${(Total.toLocaleString("en-US"))}</span></p> : <p>No hay ningun producto en el carrito</p>}
      <Button variant="success" style={{width: '100px'}}>Ir a Pagar</Button>
    </div>
    
  )
}

export default Carrito
