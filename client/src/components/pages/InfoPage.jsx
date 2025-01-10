import React, { useEffect, useState } from 'react';
import InfoUi from '../ui/InfoUi';
import axios from 'axios';

export default function InfoPage() {
  const [trassas, setTrassas] = useState([]);

  useEffect(() => {
    axios('/api/trassa')
      .then(({ data }) => setTrassas(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {trassas.map((trassa) => (
        <InfoUi key={trassa.id} />
      ))}
    </>
  );
}
