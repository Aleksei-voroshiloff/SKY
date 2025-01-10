/* eslint-disable react/prop-types */
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function StartUi({ coordinates, trassas }) {
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
            />
          ))}
        </Map>
      </YMaps>
    </div>
  );
}
