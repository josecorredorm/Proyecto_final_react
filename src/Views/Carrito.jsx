import { useContext } from "react";
import { MyContextData } from "../Context/MyContextData";
import { Button } from "react-bootstrap";

const Carrito = () => {
  const {Pedido, setPedido, Total, setTotal} = useContext(MyContextData);
  console.log(Pedido)
  return (
    <div className="container d-flex flex-column gap-3 flex-wrap w-100 justify-content-center mt-5">
      <h3>Detalle del pedido:</h3>
      {Pedido.map((pizza) => (
        <div key={pizza.id} className="d-flex gap-3">
            <div style={{width: '50px', height: '50px', backgroundImage: `url(${pizza.img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
            <p>{pizza.name}</p>
            <div className="d-flex gap-3">
            <p>${pizza.price}</p>
            <Button variant="danger" onClick={() => setTotal(Total - pizza.price)}>Eliminar</Button>
            <Button variant="primary" onClick={() => setTotal(Total + pizza.price)}>Añadir</Button>
            </div>
        </div>
      ))
      }
      <p>Total: ${Total}</p>
    </div>
  )
}

export default Carrito
