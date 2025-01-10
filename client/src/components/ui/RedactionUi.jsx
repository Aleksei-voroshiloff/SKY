import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useTrassaStore } from '../../zustand/trassaStore';
import EditPage from '../pages/EditPage';

function RedactionTrassa({ trassa, startUpdate }) {
  const deleteTrassa = useTrassaStore((store) => store.deleteTrassa);
  const handleDelete = (id) => {
    deleteTrassa(id);
  };

  const [show, setShow] = useState(false);

  //   const getTr = useTrassaStore((store) => store.getTrassas);

  return (
    <div className="card mb-3 shadow-sm" style={{ width: '1500px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={`http://localhost:3000/${trassa.image}`}
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            className="rounded-start"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title text-truncate">{trassa.title}</h5>
            <p className="card-text text-muted">{trassa.address}</p>
            <p className="card-text">{trassa.description}</p>
            <p className="card-text text-muted">{trassa.coordinate}</p>
            <div className="justify-content-between">
              <Button
                onClick={() => setShow((prev) => !prev)}
                variant="primary"
                className="me-2"
              >
                Редактировать
              </Button>
              <Button variant="danger" onClick={() => handleDelete(trassa.id)}>
                Удалить
              </Button>
              {/* <Button>DAdad</Button> */}
            </div>
          </div>
        </div>
        {show && <EditPage trassa={trassa} startUpdate={startUpdate} setShow={setShow} />}
      </div>
    </div>
  );
}

export default RedactionTrassa;
