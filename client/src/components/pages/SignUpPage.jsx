import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SignUpPage({ signUpHandler }) {
  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }} className="mt-5">
        <h3 className="text-center">Регистрация</h3>
        <Form onSubmit={signUpHandler}>
          <Form.Group className="mb-3" controlId="name"></Form.Group>
          <Form.Label>Имя</Form.Label>
          <Form.Control name="name" type="text" placeholder="Введите Ваше имя" />
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" placeholder="Введите Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Пароль</Form.Label>
            <Form.Control name="password" type="password" placeholder="Введите пароль" />
          </Form.Group>
          <Button variant="outline-primary" type="submit">
            Зарегистрироваться
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
