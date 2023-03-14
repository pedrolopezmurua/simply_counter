import React, { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  // Este efecto se ejecuta cada vez que el estado "counter" cambia
  useEffect(() => {
    // Creamos un intervalo que se ejecuta cada 1000 milisegundos (1 segundo)
    const interval = setInterval(() => {
      // Actualizamos el estado "counter" sumando 1 al valor actual
      setCounter(counter + 1);
    }, 1000);

    // Devolvemos una función que se ejecutará cuando el componente se desmonte o cuando se actualice "counter"
    return () => clearInterval(interval);
  }, [counter]); // La dependencia es "counter" para que el efecto se vuelva a ejecutar cuando cambie este valor

  // Calculamos los años, meses, dias, horas, minutos y segundos a partir del valor de "counter"

  const ano = Math.floor(counter / 31104000);
  const mes = Math.floor(counter / 2592000);
  const dia = Math.floor(counter / 86400);
  const hora = Math.floor(counter / 3600);
  const minutos = Math.floor((counter % 3600) / 60);
  const segundos = counter % 60;

  return (
    <div className="container">
      <div
        className="col d-flex p-5 my-5 text-bg-dark"
        style={{ backgroundColor: "black" }}
      >
        <div className="mx-3">
          <h5>
            <i className="far fa-clock fa-4x"></i>
            {/* Insertar el icono de reloj con tamaño 4x */}
          </h5>
        </div>
        <div className="mx-3">
          <h1>{ano < 10 ? +ano : ano}</h1>{" "}
          {/* Si ano es menor que 10, le sacamos el cero de delante */}
          <h5>Años</h5>
        </div>
        <div className="mx-3">
          <h1>{mes < 10 ? +mes : mes}</h1>{" "}
          {/* Si mes es menor que 10, le sacamos el cero de delante */}
          <h5>Meses</h5>
        </div>
        <div className="mx-3">
          <h1>{dia < 10 ? +dia : dia}</h1>{" "}
          {/* Si dia es menor que 10, le sacamos el cero de delante */}
          <h5>Días</h5>
        </div>
        <div className="mx-3">
          <h1>{hora < 10 ? +hora : hora}</h1>{" "}
          {/* Si hora es menor que 10, le sacamos el cero de delante */}
          <h5>Horas</h5>
        </div>
        <div className="mx-3">
          <h1>{minutos < 10 ? +minutos : minutos}</h1>{" "}
          {/* Si minutos es menor que 10, le sacamos el cero de delante */}
          <h5>Minutos</h5>
        </div>
        <div className="mx-3">
          <h1>{segundos }</h1>{" "}
          {/* Si segundos es menor que 10, le sacamos el cero de delante*/}
          <h5>Segundos</h5>
        </div>
      </div>
    </div>
  );
}

export default App;
