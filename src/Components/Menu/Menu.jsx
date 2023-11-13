import { useEffect } from "react"
import Banner from "../Banner/Banner"

const Menu = () => {
    const info = async () => {
    const response = await fetch("./pizzas.json")
    const data = await response.json()
    }

    useEffect(() => {
        info()
    }, [])
    
  return (
    <div>
      <Banner />
      <div className="container">
      </div>
    </div>
  )
}

export default Menu
