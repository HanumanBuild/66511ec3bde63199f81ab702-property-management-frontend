import React, { useEffect, useState } from 'react';
import { getTestimonials } from '../api';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTestimonials();
      setTestimonials(data);
    };
    fetchData();
  }, []);

  return (
    <div className="px-4 py-6 sm:px-0">
      <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
      {testimonials.map(testimonial => (
        <p key={testimonial.id} className="text-lg mb-4">"{testimonial.feedback}" - {testimonial.name}</p>
      ))}
    </div>
  );
}