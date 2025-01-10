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

      const res = await axiosInstance.post('/trassa', newTrassa);
      if (res.status === 200) {
        e.target.reset();
        navigate('/home');
      }
    } catch (error) {
      console.log(`Ошибка при добавлении записи: 
             ${error}`);
    }
  };

  return (
    <>
      <AddUi submitHandler={submitHandler} />
    </>
  );
}
