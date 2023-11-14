import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { MyContextData } from '../../Context/MyContextData';

function PizzaCard({pizza}) {
  
  const {functionAdd} = useContext(MyContextData);
  const navigate = useNavigate();
  const  funtiondetails = () => {
    navigate(`/pizza/${pizza.id}`)
    }
  return (
    <Card style={{ width: '20rem'}}>
      <Card.Img variant="top" src={pizza.img} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        
        <p style={{fontWeight: 'bold', fontSize: '20px'}}>Ingredientes:</p>
        <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
        </ul>
        <p style={{fontWeight: 'bold', fontSize: '30px'}}>${pizza.price.toLocaleString("en-US")}</p>
        
        <div className='d-flex justify-content-evenly'>
        <Button variant="primary" onClick={() => funtiondetails()}>Ver más</Button>{' '}
        <Button variant="success" onClick={() => functionAdd(pizza)}>Añadir</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PizzaCard;