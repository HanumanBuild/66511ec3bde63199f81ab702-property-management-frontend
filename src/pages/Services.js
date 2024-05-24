import React, { useEffect, useState } from 'react';
import { getServices } from '../api';

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getServices();
      setServices(data);
    };
    fetchData();
  }, []);

  return (
    <div className="px-4 py-6 sm:px-0">
      <h2 className="text-2xl font-bold mb-4">Our Services</h2>
      <ul className="list-disc list-inside">
        {services.map(service => (
          <li key={service.id} className="text-lg mb-2">{service.name}</li>
        ))}
      </ul>
    </div>
  );
}