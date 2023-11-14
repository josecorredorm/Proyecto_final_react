import { useEffect, useState } from "react"
import { MyContextData } from "./MyContextData"
import { useNavigate } from "react-router-dom"

const MyProviderData = ({children}) => {
   const navigate = useNavigate();
    const [DataPizza, setDataPizza] = useState([])
    const [Pedido, setPedido] = useState([])
    const [Total, setTotal] = useState(0)
    const [pedidoModificado, setPedidoModificado] = useState(false);
    
    const getData = async () => {
      try{
    const response = await fetch("./pizzas.json")
    if(!response.ok){
        throw new Error("Error al cargar los datos")
    }
    const data = await response.json()
    setDataPizza(data)
    }
    catch(error){
      console.error('Error:', error.message)
    }
    }
    useEffect(() => {
        getData()
    },[])
    const functionAdd = (pizza) => {
      let bandera = false;
      if(Pedido.length > 0){
        Pedido.map((buscar)=>{
          if(buscar.id === pizza.id){
            buscar.cant = buscar.cant + 1;
            bandera = true;
            setPedidoModificado(true) 
          }})
        if(!bandera){
          console.log("agregar 1")
          setPedido([...Pedido,{id: pizza.id, cant: 1, img: pizza.img, name: pizza.name, price: pizza.price}])
        }}
      else{
        setPedido([...Pedido,{id: pizza.id, cant: 1, img: pizza.img, name: pizza.name, price: pizza.price}])
        console.log("agregar 2")
        
      }
      navigate("/carrito")
    };
    const buscarTotal =  () => {
      let total = Pedido.reduce((acc, item) => acc + item.price * item.cant, 0)
      setTotal(total);
    }
    useEffect(() => {
      buscarTotal();
      setPedidoModificado(false)
    }, [Pedido, pedidoModificado]);
    
    const funtionDelete = (pizza) => {
      Pedido.map((buscar)=>{
        if(buscar.id === pizza.id){
          buscar.cant = buscar.cant - 1;
          setPedidoModificado(true)
          if(buscar.cant === 0){
            setPedido(Pedido.filter((item) => item.id !== pizza.id))
          } 
        }})
    }
  return (
    <div>
     <MyContextData.Provider value={{DataPizza, setDataPizza, Pedido, setPedido, Total, setTotal, functionAdd ,buscarTotal, funtionDelete}}>
        {children}
     </MyContextData.Provider>
    </div>
  )
}

export default MyProviderData
