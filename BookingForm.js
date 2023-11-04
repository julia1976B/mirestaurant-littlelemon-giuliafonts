import React, { useState } from 'react';

const BookingForm = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1, // Valor predeterminado de comensales
    seatingOption: 'standard' // Valor predeterminado de opción de asiento
  });

  // Manejador para actualizar el estado cuando se cambian los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Manejador para enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    console.log('Formulario enviado:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="date">Fecha:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="time">Hora:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="guests">Número de comensales:</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleInputChange}
          min="1"
          required
        />
      </div>
      <div>
        <label htmlFor="seatingOption">Opción de asiento:</label>
        <select
          id="seatingOption"
          name="seatingOption"
          value={formData.seatingOption}
          onChange={handleInputChange}
        >
          <option value="standard">Estándar</option>
          <option value="outdoor">Exterior</option>
        </select>
      </div>
      <button type="submit">Reservar</button>
    </form>
  );
};

export default BookingForm;
