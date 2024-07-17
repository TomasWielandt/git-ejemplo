import React from 'react';

// Componente que lanza un error
const ErrorComponent = () => {
    throw new Error('Error generado desde el componente');
};

export default ErrorComponent; 