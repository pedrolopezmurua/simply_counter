import React, { useState, useEffect } from "react";

function App() {
  // Aquí se declara el estado del contador y se inicializa en 0
  const [counter, setCounter] = useState(0);

  // Esta función se ejecuta después de que el componente se monta y en cada actualización del contador
  useEffect(() => {
    // Se declara un intervalo que se ejecutará cada 1000ms (1 segundo)
    const interval = setInterval(() => {
      // Se actualiza el contador incrementándolo en 1
      setCounter(counter + 1);
    }, 1000);

    // Se retorna una función que se ejecutará cuando el componente se desmonte
    // En este caso, se limpia el intervalo para evitar fugas de memoria
    return () => clearInterval(interval);
  }, [counter]); // El useEffect se ejecutará cuando el valor de counter cambie

  // Se retorna el JSX que se mostrará en la interfaz de usuario
  return (
    <div className="container text-center">
      <div className="p-5 row ">
        <div className="col col-lg-8 text-center"></div>
        <div className="d-flex mx-auto" >
          {/* Se muestra el valor actual del contador */}
          <h1>Contador: {counter}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;