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

  // Calculamos las horas, minutos y segundos a partir del valor de "counter"
  const days = Math.floor(counter / 86400);
  const hours = Math.floor(counter / 3600);
  const minutes = Math.floor((counter % 3600) / 60);
  const seconds = counter % 60;

  return (
    <div className="container text-center">
      <div className="p-5 row ">
        <div className="col col-lg-8 text-center"></div>
        <div className="d-flex mx-auto">
          <div className="mx-3">
            <h1>{seconds < 10 ? +seconds : seconds}</h1>{" "}
            {/* Si seconds es menor que 10, le añadimos un cero delante */}
            <h5>Segundos</h5>
          </div>
          <div className="mx-3">
            <h1>{minutes < 10 ? +minutes : minutes}</h1>{" "}
            {/* Si minutes es menor que 10, le añadimos un cero delante */}
            <h5>Minutos</h5>
          </div>
          <div className="mx-3">
            <h1>{hours < 10 ? +hours : hours}</h1>{" "}
            {/* Si hours es menor que 10, le añadimos un cero delante */}
            <h5>Horas</h5>
          </div>
          <div className="mx-3">
            <h1>{days < 10 ? +days : days}</h1>{" "}
            {/* Si days es menor que 10, le añadimos un cero delante */}
            <h5>Segundos</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

//   // Calculamos las horas, minutos y segundos a partir del valor de "counter"
//   const hours = Math.floor(counter / 3600);
//   const minutes = Math.floor((counter % 3600) / 60);
//   const seconds = counter % 60;

//   return (
//     <div className="container text-center">
//       <div className="p-5 row ">
//         <div className="col col-lg-8 text-center"></div>
//         <div className="d-flex mx-auto">
//           <div className="mx-3">
//             <h1>{hours < 10 ? "0" + hours : hours}</h1> {/* Si hours es menor que 10, le añadimos un cero delante */}
//             <h5>Horas</h5>
//           </div>
//           <div className="mx-3">
//             <h1>{minutes < 10 ? "0" + minutes : minutes}</h1> {/* Si minutes es menor que 10, le añadimos un cero delante */}
//             <h5>Minutos</h5>
//           </div>
//           <div className="mx-3">
//             <h1>{seconds < 10 ? "0" + seconds : seconds}</h1> {/* Si seconds es menor que 10, le añadimos un cero delante */}
//             <h5>Segundos</h5>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
