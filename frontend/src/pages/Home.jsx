import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Volunteer from '../components/Volunteer';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Volunteer />
      <ContactForm />
    </main>
  );
}
