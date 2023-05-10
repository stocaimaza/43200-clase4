import { useContador, useFetch } from "./cumstomhook"

const Hooks = () => {
    const {contador, incrementar, decrementar} = useContador(6,16);
    const data = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <div>
        <h2>Contador</h2>
        <button onClick={ decrementar }> - </button>
        <strong> {contador} </strong>
        <button onClick={ incrementar }> + </button>

        <hr />
        <h2>Fetch de Datos</h2>
        {data && data.map((usuario) => <p key={usuario.id}> {usuario.name} </p>)}
    </div>
  )
}

export default Hooks