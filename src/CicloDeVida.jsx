import React, { useState, useEffect } from 'react';

const CicloDeVida = () => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        fetch('https://mi-api.com/datos')
          .then(response => response.json())
          .then(data => setData(data));
      }, []);

      return (
        <div>
          {data ? (
            <ul>
              {data.map(item => (
                <li key={item.id}>{item.nombre}</li>
              ))}
            </ul>
          ) : (
            <p>Cargando datos...</p>
          )}
        </div>
      );  
  }

export default CicloDeVida;