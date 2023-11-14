import { useContext } from "react"
import { useParams } from "react-router-dom"
import { MyContextData } from "../Context/MyContextData";
import { Button } from "react-bootstrap";

const Pizza = () => {
    const {DataPizza, functionAdd} = useContext(MyContextData);
    const { id } = useParams()
  return (
    <div style={{marginTop: '100px'}}>
      {DataPizza.map((pizza) => {
          if(pizza.id === id){
            return(
                <div key={pizza.id} className="container d-flex flex-wrap justify-content-center gap-5 pt-5 ">
                   <div style={{backgroundImage: `url(${pizza.img})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '450px', width: '450px' }}></div> 
                    <div style={{width: '500px'}}>
                        <h1>{pizza.name}</h1>
                        <p>{pizza.desc}</p>
                        <p style={{fontWeight: 'bold', fontSize: '18px'}}>Ingredientes:</p>
                        <ul>
                            {pizza.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <div className="d-flex justify-content-between">
                        <span style={{fontWeight: 'bold', fontSize: '25px'}}>Precio: ${pizza.price}</span>
                        <div className="d-flex justify-content-evenly gap-3" >
                        <Button variant="primary"onClick={() => window.history.back()}>Atras</Button>
                        <Button variant="success" onClick={() => functionAdd(pizza)}>Añadir</Button>
                        </div>
                        </div>
                    </div>
                </div>
            )
          }
          else{
            return null
          }
    })}
    </div>
  )
}

export default Pizza
