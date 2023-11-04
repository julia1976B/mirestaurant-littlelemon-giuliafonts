import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Carousel from './components/Carousel';
import Main from './components/Main';
import BookingForm from './components/BookingForm';
import CustomerInfoForm from './components/CustomerInfoForm';
import ReservationDetailsForm from './components/ReservationDetailsForm';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <Nav />
      <Carousel />
      <Main />
      <BookingForm />
      <CustomerInfoForm />
      <ReservationDetailsForm />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
