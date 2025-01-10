import React, { useEffect } from 'react';
import InfoUi from '../ui/InfoUi';
import axios from 'axios';

export default function InfoPage() {


    useEffect(() => {
        axios('/api/trassa')
          .then(({ data }) => setTrassas(data))
          .catch((error) => console.log(error));
      }, []);

  return (
    <>
      <InfoUi />
    </>
  );
}
