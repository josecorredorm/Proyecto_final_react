import "./Banner.css"
const Banner = () => {
  return (
    <div className="banner" >
      <div style={{backdropFilter: 'blur(5px)'}}>
      <div> 
      <span className="verde">Piz</span><span className="blanco">ze</span><span className="rojo">ría</span>
      </div>
      <h1>¡Mamma Mia!</h1>
      <h4>Tenemos la mejor pizza que podras encontrar</h4>
    </div>
    </div>
  )
}

export default Banner
