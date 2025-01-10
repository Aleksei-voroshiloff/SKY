import { useEffect, useState } from 'react';
import InfoUi from '../ui/InfoUi';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function InfoPage() {
  const [trassas, setTrassas] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios(`/api/trassa/${id}`)
      .then(({ data }) => setTrassas([data]))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {trassas.map((trassa) => (
        <InfoUi key={trassa.id} trassa={trassa} />
      ))}
    </div>
  );
}
