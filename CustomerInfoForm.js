import React, { useState } from 'react';

const CustomerInfoForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    phoneNumber: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
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
        <label htmlFor="firstName">Nombre:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Apellido:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="dateOfBirth">Fecha de Nacimiento:</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Género:</label>
        <label>
          <input
            type="radio"
            name="gender"
            value="masculino"
            checked={formData.gender === 'masculino'}
            onChange={handleChange}
            required
          />
          Masculino
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="femenino"
            checked={formData.gender === 'femenino'}
            onChange={handleChange}
            required
          />
          Femenino
        </label>
      </div>
      <div>
        <label htmlFor="phoneNumber">Número de Teléfono:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          minLength="6"
          required
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default CustomerInfoForm;
