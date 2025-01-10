/* eslint-disable react/prop-types */
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useState } from 'react';
import LocationPopup from './LocationPopup';
import '../css/pages.css';

export default function StartUi({ coordinates, trassas, points }) {
  const [hoveredLocation, setHoveredLocation] = useState(null);

  const handleMouseEnter = (location) => {
    setHoveredLocation(location);
  };

  const handleMouseLeave = () => {
    setHoveredLocation(null);
  };

  const handleLocationClick = (location) => {
    // Переход на страницу локации
    window.location.href = `/info/${hoveredLocation.id}`;
  };

  return (
    <div
      style={{
        width: '95%',
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        border: 'solid 1px blue',
        borderRadius: '15px',
        overflow: 'hidden',
        position: 'absolute',
      }}
    >
      <YMaps>
        <Map
          defaultState={{ center: coordinates, zoom: 9 }}
          style={{ width: '100%', height: '400px' }}
        >
          {points.map((point, ind) => {
            const trassa = trassas[ind];
            return (
              <Placemark
                key={ind}
                geometry={point}
                options={{
                  preset: 'islands#redIcon',
                }}
                onMouseEnter={() => handleMouseEnter(trassa)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleLocationClick(trassa)} // Передаем объект trassa
              />
            );
          })}
        </Map>
      </YMaps>
      {hoveredLocation && (
        <LocationPopup
          title={hoveredLocation.title}
          image={`http://localhost:3000/${hoveredLocation.image}`}
          style={{
            position: 'absolute',
            zIndex: 1,
            left: `${(hoveredLocation.coordinate[0] - coordinates[0]) * 1000}px`,
            top: `${(hoveredLocation.coordinate[1] - coordinates[1]) * 1000}px`,
          }}
        />
      )}
    </div>
  );
}
