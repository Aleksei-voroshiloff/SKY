import { useEffect, useState } from 'react';
import axios from 'axios';
import StartUi from '../ui/StartUi';
import '../css/pages.css';

export default function StartPage() {
  const [trassas, setTrassas] = useState([]);
  const [points, setPoints] = useState([])
  const [coordinates, setCoordinates] = useState([]);
  const apiKey = 'fa19c003-7a98-4e3f-9598-f62e8540e58f'; // Замените на ваш API ключ
  const address = 'Нижний Новгород'; // Адрес для геокодирования

  useEffect(()=>{
    axios('/coordinate')
    .then(({data})=> setPoints(data))
    .catch((error)=> console.log(error))
  },[])

  useEffect(() => {
    axios('/api/trassa')
      .then(({ data }) => {
        setTrassas(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

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
        <StartUi trassas={trassas} coordinates={coordinates} points={points}/>
      </div>
    </>
  );
}
