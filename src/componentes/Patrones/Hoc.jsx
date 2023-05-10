/* PATRONES DE DISEÑO */
//En React tenemos algunos patrones de diseño que nos permiten reutilizar componentes. 

//1) High Order Components (HOC)
//2) Render Props

//1) Es una función que toma como argumento un componente y devuelve un nuevo componente con una funcionalidad adicional.

//Ejemplo super básico: agrego un título a un componente que muestra un mensaje. 

export const mensajeConTitulo = (Mensaje) => {
    return function() {
        return (
            <>
                <h2>Hola Mundo</h2>
                <Mensaje/>
            </>
        )
    }
}

//Ejemplo muy latino: aumento de precios. 

export const conAumento = (Componente) => {
    return function({nombre, precio}) {
        const nuevoPrecio = precio + 500;
        return <Componente nombre={nombre} precio={nuevoPrecio} />
    }
}



const Hoc = () => {
  return (
    <div>Hoc</div>
  )
}

export default Hoc