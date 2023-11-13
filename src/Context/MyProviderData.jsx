import { useEffect, useState } from "react"
import { MyContextData } from "./MyContextData"

const MyProviderData = ({children}) => {
    const [DataPizza, setDataPizza] = useState([])
    const [Pedido, setPedido] = useState([])
    const [Total, setTotal] = useState(0)
    
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

  return (
    <div>
     <MyContextData.Provider value={{DataPizza, setDataPizza, Pedido, setPedido, Total, setTotal}}>
        {children}
     </MyContextData.Provider>
    </div>
  )
}

export default MyProviderData
