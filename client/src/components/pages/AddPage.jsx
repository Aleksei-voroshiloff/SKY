import React from 'react';
import AddUi from '../ui/AddUi';

export default function AddPage() {
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const newItem = new FormData(e.target);

      const title = newItem.get('title');
      const desc = newItem.get('desc');
      const file = newItem.get('file');
      const price = newItem.get('price');
      const categoryId = newItem.get('categoryId');

      if (!title || !desc || !price || !file || !categoryId) {
        alert('Заполните все поля !');
        return;
      }

      await axiosInstance.post('/items', newItem);

      e.target.reset();
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
