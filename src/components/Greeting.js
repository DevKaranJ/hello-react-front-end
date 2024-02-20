import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const response = await axios.get('http://localhost:3000/random_greeting');
        setGreeting(response.data.greeting);
      } catch (error) {
        console.error('Error fetching greeting:', error);
      }
    };

    fetchGreeting();
  }, []);

  return (
    <div>
      <h2>Greeting Word</h2>
      <div>{greeting}</div>
    </div>
  );
};

export default Greeting;
