import './App.css';
//import Fetch from './componentes/Fetch/Fetch';
//import Necflis from './componentes/Necflis/Necflis';
import Articulos from './componentes/Articulos/Articulos';
import Hooks from './componentes/Hooks/Hooks';

//Importamos la función y el componente Mensaje. 
import Mensaje from './componentes/Patrones/Mensaje';
import { mensajeConTitulo, conAumento } from './componentes/Patrones/Hoc';
import Producto from './componentes/Patrones/Producto';


import Login from './componentes/Patrones/Login';

function App() {
  const NuevoComponente = mensajeConTitulo(Mensaje);
  const NuevoProducto = conAumento(Producto);
  return (
    <>
      {
        //<Fetch/>
        //<Necflis/>
      }

      {
        /*
        <h1>Blog sobre Gatitos</h1>
        <h2>Noticias</h2>
        <Articulos titulo="Alimentos nuevos" img="https://placekitten.com/200/300"/>
        <h2>Recetas</h2>
        <Articulos titulo="Recetas con Cereal" img="https://placekitten.com/200/300">

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est voluptate provident, non voluptatem dicta sequi a nemo fugiat magni aperiam. Sequi quae eius molestiae vel exercitationem cupiditate eos rem repellat?</p>
        
        <strong>Tiempo de Cocción: 10</strong>
        </Articulos>
        
        */
        //<Hooks/>
      }

      <NuevoComponente />
      <hr />
      <NuevoProducto nombre="Tomates" precio={100} />
      
      <Login/>

      
    </>
  );
}

export default App;
