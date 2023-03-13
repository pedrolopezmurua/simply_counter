import React, { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 1000); // Incrementa el contador cada segundo (1000 milisegundos)
    return () => clearInterval(interval);
  }, [counter]);


  return (
    <div className="container text-center">
      <div className="p-5 row ">
        <div className="col col-lg-8 text-center"></div>
        <div className="d-flex mx-auto" >
          <h1>Contador: {counter}</h1>
          <h1>Contador: {counter}</h1>
          <h1>Contador: {counter}</h1>
        </div>
      </div>
    </div>
  );
}

{
horas = (counter / 3600);
minutos = ((counter-horas*3600)/60);
segundos = tsegundos-(horas*3600+minutos*60);
return horas.ToString() + ":" + minutos.ToString() + ":" + segundos.ToString(); 
}






export default App;
