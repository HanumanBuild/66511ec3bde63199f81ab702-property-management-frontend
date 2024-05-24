import React, { useEffect, useState } from 'react';
import { getCompanyInfo } from '../api';

export default function Home() {
  const [companyInfo, setCompanyInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCompanyInfo();
      setCompanyInfo(data);
    };
    fetchData();
  }, []);

  if (!companyInfo) return <div>Loading...</div>;

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Welcome to {companyInfo.name}</h2>
        <p className="text-lg mb-4">{companyInfo.description}</p>
        <p className="text-lg font-bold text-green-600">Our service is available {companyInfo.serviceAvailability}!</p>
      </div>
    </div>
  );
}