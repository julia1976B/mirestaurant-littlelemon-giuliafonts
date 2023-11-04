import React, { useState } from 'react';

const ReservationDetailsForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    numGuests: '',
    cardName: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    confirmationSMS: false,
    confirmationEmail: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
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
          onChange={handleChange}
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
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="numGuests">Número de Comensales:</label>
        <input
          type="number"
          id="numGuests"
          name="numGuests"
          value={formData.numGuests}
          onChange={handleChange}
          min="1"
          required
        />
      </div>
      <div>
        <label htmlFor="cardName">Nombre en la Tarjeta:</label>
        <input
          type="text"
          id="cardName"
          name="cardName"
          value={formData.cardName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="cardNumber">Número de Tarjeta:</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          minLength="16"
          maxLength="16"
          required
        />
      </div>
      <div>
        <label htmlFor="expirationDate">Fecha de Expiración:</label>
        <input
          type="month"
          id="expirationDate"
          name="expirationDate"
          value={formData.expirationDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          value={formData.cvv}
          onChange={handleChange}
          minLength="3"
          maxLength="4"
          required
        />
      </div>
      <div>
        <label>Confirmación via SMS:</label>
        <input
          type="checkbox"
          name="confirmationSMS"
          checked={formData.confirmationSMS}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Confirmación via Email:</label>
        <input
          type="checkbox"
          name="confirmationEmail"
          checked={formData.confirmationEmail}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ReservationDetailsForm;
