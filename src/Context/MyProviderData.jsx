import { useEffect, useState } from "react"
import { MyContextData } from "./MyContextData"

const MyProviderData = ({children}) => {
    const [DataPizza, setDataPizza] = useState([])
    
    const getData = async () => {
    const response = await fetch("./pizzas.json")
    const data = await response.json()
    setDataPizza(data)
    }

    useEffect(() => {
        getData()
    },[])

  return (
    <div>
     <MyContextData.Provider value={{DataPizza, setDataPizza}}>
        {children}
     </MyContextData.Provider>
    </div>
  )
}

export default MyProviderData
