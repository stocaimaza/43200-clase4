import { useState, useEffect } from 'react'
import './Necflis.css'

const Necflis = () => {
    const [peliculas, setPeliculas] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const MI_KEY = "c9f04fa4";

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=${MI_KEY}&s=${busqueda}`)
            .then(respuesta => respuesta.json())
            .then(data => {
                setPeliculas(data.Search);
            })
            .catch(error => {
                console.log(error);
            })
    }, [busqueda])

    const jandelSubmit = (event) => {
        event.preventDefault();
        setBusqueda(event.target.busqueda.value)
        event.target.busqueda.value = "";
    }


    return (
        <div>
            <h1>Necflis</h1>
            <form onSubmit={jandelSubmit}>
                <input type="text" name="busqueda" />
                <button type='submit'> Buscar </button>
            </form>

            <ul>
                {
                    peliculas === undefined ? <h2>La peliícula no esta disponible en nuestra base de datos</h2> : peliculas.map(peli => (<li key={peli.imdbID}> <img src={peli.Poster} /> {peli.Title} </li>))
                }

            </ul>
        </div>
    )
}

export default Necflis