import { Route, Routes } from "react-router-dom"
import NavApp from "./Components/Navbar/NavApp"
import MyProviderData from "./Context/MyProviderData"
import Home from "./Views/Home"
import Pizza from "./Views/Pizza"
import Carrito from "./Views/Carrito/Carrito"

const App = () => {
  return (
    <div>
      <MyProviderData>
      <NavApp />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/pizza/:id" element={<Pizza />} />
      </Routes>
      </MyProviderData>
    </div>
  )
}

export default App
