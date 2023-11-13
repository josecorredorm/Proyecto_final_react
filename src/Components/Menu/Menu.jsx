import { useContext } from "react"
import Banner from "../Banner/Banner"
import PizzaCard from "../Cards/PizzaCard"
import { MyContextData } from "../../Context/MyContextData"
const Menu = () => {
    const {DataPizza, setDataPizza} = useContext(MyContextData);
    console.log(DataPizza)
  return (
    <div>
      <Banner />
      <div className="container d-flex flex-wrap justify-content-center gap-5 pt-5 ">
      {DataPizza.map((pizza) => (
        <PizzaCard key={pizza.id} pizza={pizza} />
      ))}
      </div>
    </div>
  );
};

export default Menu
