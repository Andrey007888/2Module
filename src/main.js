
// Генерация карточек
import{createFilmCardTemplate} from './view/filmsCard.js';
import{createProfileTemplate} from './view/profile.js';
import{createMenuTemplate} from './view/menu.js';
import{createShowMoreButtonTemplate} from './view/snow-more-btn.js';
import{createPopupTemplate} from './view/popap.js';
import{createStatisticsTemplate} from './view/statistics.js'

const FILMS_COUNT = 5;
const EXTRA_COUNT = 2;

//Функция генерации
const render = (container, template, place = 'beforeend') => {
    container.insertAdjacentHTML(place, template);
  };

//Добавление картинки профиля
const siteBodyElement = document.querySelector('body'); 
const headerElement = siteBodyElement.querySelector('.header');
render(headerElement, createProfileTemplate());

//Добавление навигации или меню хер знает
const mainElement = siteBodyElement.querySelector('.main');
render(mainElement, createMenuTemplate());

const filmsListElement = mainElement.querySelector('.films-list');
const filmsListExtraElement = mainElement.querySelectorAll('.films-list--extra');

//Добавление карточек фильмов
const allFilmsListElement = mainElement.querySelector('.films-list__container');
for(let i = 0; i < FILMS_COUNT; i++) {
  render(allFilmsListElement, createFilmCardTemplate());
}


//Добавление доп карточек
const topRatedElement = filmsListExtraElement[0].querySelector('.films-list__container');
for(let i = 0; i < EXTRA_COUNT; i++) {
  render(topRatedElement, createFilmCardTemplate());
};

const mostCommentedElement = filmsListExtraElement[1].querySelector('.films-list__container');
for(let i = 0; i < EXTRA_COUNT; i++) {
  render(mostCommentedElement, createFilmCardTemplate());
};

//Добавление кнопки SnowMore
render(allFilmsListElement,createShowMoreButtonTemplate());


//Попап
// render(siteBodyElement, createPopupTemplate());

//Статистика
const footerStaisticsElement = siteBodyElement.querySelector('.footer__statistics');
render(footerStaisticsElement, createStatisticsTemplate());