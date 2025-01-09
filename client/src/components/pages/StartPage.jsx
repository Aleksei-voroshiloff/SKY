import { useEffect, useState } from 'react';
import axios from 'axios';
import StartUi from '../ui/StartUi';
import '../css/pages.css';

const trassas = [
  {
    title: 'Лыжная трасса в Лысых Горах',
    address: 'Лысые Горы, Нижегородская область',
    description: 'Разнообразные маршруты для лыжников разного уровня подготовки.',
    coordinate: [56.196208, 43.842068],
    image: 'url_to_image_lysyye_gory.jpg',
    userId: 1,
  },
  {
    title: 'Лыжная трасса в Сосновом Бору',
    address: 'Сосновый Бор, Нижегородская область',
    description: 'Трасса окружена живописными сосновыми лесами.',
    coordinate: [56.182033, 43.43544],
    image: 'url_to_image_sosnovy_bor.jpg',
    userId: 1,
  },
  {
    title: 'Лыжная трасса на Воскресенских холмах',
    address: 'Воскресенские холмы, Нижегородская область',
    description: 'Известна своими крутыми спусками и подъемами.',
    coordinate: [56.358778, 44.210468],
    image: 'url_to_image_voskresenskie_kholmy.jpg',
    userId: 1,
  },
];

export default function StartPage() {
  // const [trassas, setTrassas] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const apiKey = 'fa19c003-7a98-4e3f-9598-f62e8540e58f'; // Замените на ваш API ключ
  const address = 'Нижний Новгород'; // Адрес для геокодирования

  // useEffect(() => {
  //   axios('/api/trassa')
  //     .then(({ data }) => setTrassas(data))
  //     .catch((error) => console.log(error));
  // }, []);

  useEffect(() => {
    axios(
      `https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&geocode=${address}&format=json`,
    )
      .then(({ data }) => {
        const coords =
          data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(
            ' ',
          );
        setCoordinates([parseFloat(coords[1]), parseFloat(coords[0])]);
      })
      .catch((error) => console.log('Ошибка при получении координат:', error));
  }, []);

  return (
    <>
      <div className="container">
        <img src="/gor.jpg" className="image" />
        <div className="title">
          <div className="step1">Горнолыжные</div>
          <div className="step2">Трассы</div>
          <div className="step3">Нижегородской</div>
          <div className="step4">Области</div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <StartUi trassas={trassas} tra coordinates={coordinates} />
      </div>
    </>
  );
}
