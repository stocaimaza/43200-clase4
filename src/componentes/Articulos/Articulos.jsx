import './Articulos.css'

const Articulos = ({img, titulo, children}) => {
  return (
    <article>
        <img src={img} alt={titulo} />
        <h3> {titulo} </h3>
        {children}
        <button> Leer Artículo </button>
    </article>
  )
}

export default Articulos