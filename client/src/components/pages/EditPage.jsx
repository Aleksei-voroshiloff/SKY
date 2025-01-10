import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useTrassaStore } from '../../zustand/trassaStore';
export default function EditPage({ trassa, setShow }) {
  const updateTrassa = useTrassaStore((store) => store.updateTrassa);
  const changeHandler = async (e, id) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    updateTrassa(id, formData);
    setShow(false);
  };

  return (
    <Container className="mt-5">
      <Form
        style={{ width: '500px', margin: '0 auto' }}
        onSubmit={(event) => changeHandler(event, trassa.id)}
      >
        <Form.Group controlId="formTitle">
          <Form.Control name="title" type="text" defaultValue={trassa.title} required />
        </Form.Group>
        <Form.Group controlId="formAddress">
          <Form.Control name="address" type="text" defaultValue={trassa.address} />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Control
            name="description"
            type="text"
            defaultValue={trassa.description}
          />
        </Form.Group>
        <Form.Group controlId="formCoordinate">
          <Form.Control name="coordinate" type="text" defaultValue={trassa.coordinate} />
        </Form.Group>
        <Form.Group controlId="formImage">
          <Form.Control name="image" type="file" />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Сохранить
        </Button>
        <Link to="/redaction" className="ms-2">
          <Button variant="secondary" className="mt-3">
            Скрать
          </Button>
        </Link>
      </Form>
    </Container>
  );
}
