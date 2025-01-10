import React from 'react';
import { Button, NavLink } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import '../css/pages.css';
import { Link } from 'react-router-dom';

export default function AddUi({ submitHandler }) {
  return (
    <div className="add">
      <div className="addForm">
        <h1 style={{ fontFamily: 'Montserrat Alternates' }}>Добавление трассы ⛷️</h1>
        <Form onSubmit={submitHandler}>
          <div className="input">
            <Form.Label>Наименование трассы</Form.Label>
            <Form.Control name="title" type="text" />
          </div>
          <div className="input">
            <Form.Label>Адрес</Form.Label>
            <Form.Control name="address" type="text" />
          </div>
          <div className="input">
            <Form.Label>Описание</Form.Label>
            <Form.Control as="textarea" name="description" type="text" />
          </div>
          <div className="input">
            <Form.Label>Введите координаты трассы</Form.Label>
            <Form.Control
              name="coordinate"
              type="text"
              placeholder="56.182033, 43.43544"
            />
          </div>
          <div className="input">
            <Form.Label>Добавьте фото трассы</Form.Label>
            <Form.Control name="file" type="file" />
          </div>

          <Button type="submit" variant="success" className="mt-3">
            Добавить
          </Button>
          <Link to="/">
            <Button
              type="submit"
              variant="warning"
              style={{ marginLeft: '20px' }}
              className="mt-3"
            >
              Вернуться на главную
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
}
