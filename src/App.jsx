import React from 'react';
import MiComponente from './MiComponente';
import MiPropiedad from './MiPropiedad';
import CicloDeVida from './CicloDeVida';
import Button from './Manejando';
import Input from './Manejando2';
import ErrorBoundary from './ErrorBoundary';
import ErrorComponent from './ErrorComponent';

const props = { nombre: 'Tomás' };

function App() {
  return (
    <div>
      <MiComponente />
      <MiPropiedad {...props} />
      <CicloDeVida />
      <Button/>
      <Input />
      <ErrorBoundary>
      <div>
        <h1>Componente con Error Boundary</h1>
        <ErrorComponent />
      </div>
      </ErrorBoundary>
    </div>    
  );
}

export default App;