import React, { Component } from 'react';

// // Componente que lanza un error
// const ErrorComponent = () => {
//   throw new Error('Error generado desde el componente');
// };

// Componente de Error Boundary
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // También puedes registrar el error en un servicio de reporte de errores
    console.error('Error:', error);
    console.error('Información del error:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Oops! Algo salió mal</h1>
          <p>Por favor, recarga la página o intenta más tarde.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
