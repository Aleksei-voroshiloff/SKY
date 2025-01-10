import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import React, { useState } from 'react';
import LocationPopup from './LocationPopup';
import '../css/pages.css';

export default function StartUi({ coordinates, trassas }) {
  const [hoveredLocation, setHoveredLocation] = useState(null);

  const handleMouseEnter = (location) => {
    setHoveredLocation(location);
  };

  const handleMouseLeave = () => {
    setHoveredLocation(null);
  };

  const handleLocationClick = (location) => {
    // Переход на страницу локации
    window.location.href = `/location/${location.title.replace(/\s/g, '-')}`;
  };

  return (
    <div
      style={{
        width: '95%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'solid 1px blue',
        borderRadius: '15px',
        overflow: 'hidden',
        position: 'relative', // Убедитесь, что родительский элемент имеет относительное позиционирование
      }}
    >
      <YMaps>
        <Map
          defaultState={{ center: coordinates, zoom: 9 }}
          style={{ width: '100%', height: '400px' }}
        >
          {trassas.map((trassa, ind) => (
            <Placemark
              key={ind}
              geometry={trassa.coordinate}
              // properties={{
              //   // balloonContent: `Трасса: ${trassa.title}`,
              // }}
              options={{
                preset: 'islands#redIcon', // Установка красного цвета маркера
              }}
              onMouseEnter={() => handleMouseEnter(trassa)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleLocationClick(trassa)}
            />
          ))}
        </Map>
      </YMaps>
      {hoveredLocation && (
        <LocationPopup
          title={hoveredLocation.title}
          image={hoveredLocation.image}
          style={{
            position: 'absolute',
            zIndex: 1,
            left: `${(hoveredLocation.coordinate[0] - coordinates[0]) * 1000}px`, // Умножаем на 1000 для правильного позиционирования
            top: `${(hoveredLocation.coordinate[1] - coordinates[1]) * 1000}px`, // Умножаем на 1000 для правильного позиционирования
            transform: 'translate(50%, 100%)', // Центрируем всплывающее окно относительно точки
          }}
        />
      )}
    </div>
  );
}
