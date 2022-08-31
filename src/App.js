import { useState } from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";

// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

function App() {

  function incremento(){
    setContador(contador+1)
  }
  const [contador, setContador]=useState(0)  //inicie un estado, donde contador es donde se va a guardar ese estado y el set es el unico que puede modifciar ese estado. 

  return (
    <div className="App">
      <Cabecera cantidad={contador} />
      <Listado incrementar={incremento}/>
    </div>
  );
}

export default App;
