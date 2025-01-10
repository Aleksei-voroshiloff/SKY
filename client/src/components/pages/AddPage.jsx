import React from 'react';
import AddUi from '../ui/AddUi';
import axiosInstance from '../../api/axiosInstance';
import { redirect, useNavigate } from 'react-router-dom';

export default function AddPage() {
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const newTrassa = new FormData(e.target);

      const title = newTrassa.get('title');
      const address = newTrassa.get('address');
      const description = newTrassa.get('description');
      const coordinate = newTrassa.get('coordinate');
      const file = newTrassa.get('file');

      if (!title || !address || !description || !file || !coordinate) {
        alert('Заполните все поля !');
        return;
      }

      // Приведение координат к нужному формату
      const regex = /^(-?\d+\.\d+)\s+(-?\d+\.\d+)$/;
      const match = coordinate.trim().match(regex);

      if (!match) {
        alert(`Неверный формат координат. 
        Используйте: "56.373123 43.978368"`);
        return;
      }

      // Присвоение отформатированных координат
      const formattedCoordinates = `${match[1]} ${match[2]}`;
      newTrassa.set('coordinate', formattedCoordinates);

      const res = await axiosInstance.post('/trassa', newTrassa);
      if (res.status === 200) {
        e.target.reset();
        navigate('/');
      }
    } catch (error) {
      console.log(`Ошибка при добавлении записи: ${error}`);
    }
  };

  return (
    <>
      <AddUi submitHandler={submitHandler} />
    </>
  );
}
