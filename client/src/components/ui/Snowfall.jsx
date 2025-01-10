import React, { useEffect } from 'react';
import '../css/pages.css';

const Snowfall = () => {
  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.style.left = Math.random() * 100 + 'vw'; // Случайное положение по горизонтали
      snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Случайная скорость падения
      document.body.appendChild(snowflake);

      // Удаляем снеговик после анимации
      snowflake.addEventListener('animationend', () => {
        snowflake.remove();
      });
    };

    const interval = setInterval(createSnowflake, 300); // Создаем снеговиков каждые 300 мс

    return () => clearInterval(interval); // Очистка интервала при размонтировании
  }, []);

  return null; // Этот компонент ничего не рендерит
};

export default Snowfall;
