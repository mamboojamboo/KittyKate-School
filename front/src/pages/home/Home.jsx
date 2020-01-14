import React from 'react';

import './styles/home.css';

const Home = () => {
  const userI = null;
  return (

    <div>
      <div class='slider'>
        <div class='slider__text-wrapper'>
          <p class='slider__greeting-text'>Добро пожаловать в&nbsp;Школу иностранных языков Китти-Кейт!</p>
          <p class='slider__text'>Наши преподаватели имеют практический опыт общения и&nbsp;работы с&nbsp;иностранными гражданами, также в&nbsp;нашей школе преподают носители языка.</p>
          <h2>Ближайшие мероприятия</h2>
        </div>
      </div>

      {/* <div class='calendar-min'>
        <div class='calendar-min__text-wrapper'>
          <h2 class='calendar-min__title'>Ближайшие уроки в группах</h2>
          <a href="#" class='calendar-min__text'>Расписания групп</a>
        </div>
      </div> */}

      {/* <div class='calendar-min__blocks-wrapper'>
        <div class='calendar-min__block'>
          <ul class='calendar-min__block-list'>
            <li>Тема: </li>
            <li>Начало: </li>
            <li>Окончание: </li>
            <li>Описание: </li>
          </ul>
        </div>
      </div> */}

    </div>
  );
};

export default Home;
