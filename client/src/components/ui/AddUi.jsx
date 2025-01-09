import React from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import '../css/pages.css';

export default function AddUi({ submitHandler }) {
  return (
    <div className="add">
      <div className="addForm">
        <h1 style={{ fontFamily: 'Montserrat Alternates' }}>Добавление трассы ⛷️</h1>
        <Form onSubmit={submitHandler}>
          <div className="input">
            <Form.Control name="title" type="text" placeholder="Наименование" />
          </div>
          <div className="input">
            <Form.Control name="address" type="text" placeholder="Адрес" />
          </div>
          <div className="input">
            <Form.Control name="description" type="number" placeholder="Стоимость" />
          </div>

          <div className="input">
            <Form.Control name="file" type="file" />
          </div>
          <div className="input">
            <Form.Control name="price" type="number" placeholder="Стоимость" />
          </div>

          <Button type="submit" variant="primary" className="mt-3">
            Добавить
          </Button>
        </Form>
      </div>
    </div>
  );
}
