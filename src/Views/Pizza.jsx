import { useContext } from "react"
import { useParams } from "react-router-dom"
import { MyContextData } from "../Context/MyContextData";

const Pizza = () => {
    const {DataPizza, setDataPizza} = useContext(MyContextData);
    const { id } = useParams()
  return (
    <div>
      {DataPizza.map((pizza) => {
          if(pizza.id === id){
            console.log(pizza.name)
          }
    })}
    </div>
  )
}

export default Pizza
