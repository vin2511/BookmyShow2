import React from 'react';
import Navbar from '../../Components/NavBar/Navbar';

import { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:7000/viewowner');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
        <Navbar/>
      <h1>Welcome to the home page!</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

