import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Testimonials from './pages/Testimonials';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Property Management Company</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-blue-500">Home</Link></li>
              <li><Link to="/about-us" className="text-blue-500">About Us</Link></li>
              <li><Link to="/services" className="text-blue-500">Services</Link></li>
              <li><Link to="/contact-us" className="text-blue-500">Contact Us</Link></li>
              <li><Link to="/testimonials" className="text-blue-500">Testimonials</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/services" component={Services} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/testimonials" component={Testimonials} />
        </Switch>
      </main>
      <footer className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">© 2023 Property Management Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}