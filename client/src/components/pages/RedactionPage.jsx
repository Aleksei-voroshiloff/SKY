/* eslint-disable react/no-unknown-property */
import { useEffect } from 'react';
import RedactionTrassa from '../ui/RedactionUi';
import { useTrassaStore } from '../../zustand/trassaStore';
import { Container, Spinner } from 'react-bootstrap';

export default function RedactionPage() {
  const trassas = useTrassaStore((store) => store.trassas);
  const load = useTrassaStore((load) => load.trassasLoading);
  const getTrassas = useTrassaStore((store) => store.getTrassas);

  useEffect(() => {
    getTrassas('/trassa');
  }, [getTrassas]);

  if (load) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Загрузка...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <div className="mt-4">
      <h2 className="text-center mb-4" style={{ fontFamily: 'Montserrat Alternates' }}>
        Редактирование Трасс
      </h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {trassas.map((trassa) => (
          <div key={trassa.id} xs={12} sm={6} md={4} lg={3} className="me-3">
            <RedactionTrassa trassa={trassa} />
          </div>
        ))}
      </div>
    </div>
  );
}
