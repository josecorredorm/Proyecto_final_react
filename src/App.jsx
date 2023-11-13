import NavApp from "./Components/Navbar/NavApp"
import MyProviderData from "./Context/MyProviderData"

import Home from "./Views/Home"

const App = () => {
  return (
    <div>
      <MyProviderData>
      <NavApp />
      <Home />
      </MyProviderData>
    </div>
  )
}

export default App
