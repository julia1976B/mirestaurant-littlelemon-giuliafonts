import React from 'react';

const Main = () => {
  return (
    <div className="main">
      {/* Imágenes del menú */}
      <div className="menu-item">
        <img src="menu1.jpg" alt="Menu 1" />
        <div className="menu-info">
          <h3>Nombre del Menu 1</h3>
          <p>Precio: $10.00</p>
        </div>
      </div>
      {/* Repite para cada opción de menú */}
    </div>
  );
}

export default Main;
