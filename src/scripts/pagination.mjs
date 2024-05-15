import { getTrendingFilms } from './get-trending';
import { makeSingleFilmTile } from './make_single_tile.mjs';

const filmsContainer = document.getElementById('films-container');
const pagination = document.getElementById('pagination');

const pageSize = 10;
let currentPage = 1;

async function displayFilms(page) {
  try {
    const response = await getTrendingFilms(page);
    const films = response.results;
    console.log(films);
    filmsContainer.innerHTML = '';

    for (const film of films) {
      const filmTileHTML = await makeSingleFilmTile(film);
      filmsContainer.insertAdjacentHTML('beforeend', filmTileHTML);
    }

    const totalPages = response.total_pages;
    createPagination(totalPages);
  } catch (error) {
    console.error('Wystąpił błąd podczas pobierania danych:', error);
  }
}

function createPagination(totalPages) {
  pagination.innerHTML = ''; // Wyczyści poprzednią paginację

  const pageRange = 3; // Zakres numerów stron do wyświetlenia

  let startPage = currentPage - pageRange;
  let endPage = currentPage + pageRange;

  startPage = Math.max(startPage, 1);
  endPage = Math.min(endPage, totalPages);

  // Dodaj strzałkę "Poprzednia"
  const previousPageItem = document.createElement('li');
  previousPageItem.classList.add('page-item');
  if (currentPage === 1) {
    previousPageItem.classList.add('disabled');
  }
  const previousPageLink = document.createElement('a');
  previousPageLink.classList.add('page-link');
  previousPageLink.href = '#';
  previousPageLink.textContent = '<';
  previousPageLink.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      displayFilms(currentPage);
    }
  });
  previousPageItem.appendChild(previousPageLink);
  pagination.appendChild(previousPageItem);

  // Dodaj numery stron
  for (let i = startPage; i <= endPage; i++) {
    const pageItem = document.createElement('li');
    pageItem.classList.add('page-item');
    if (i === currentPage) {
      pageItem.classList.add('active');
    }

    const pageLink = document.createElement('a');
    pageLink.classList.add('page-link');
    pageLink.href = '#';
    pageLink.textContent = i;
    pageLink.addEventListener('click', () => {
      currentPage = i;
      displayFilms(currentPage);
    });

    pageItem.appendChild(pageLink);
    pagination.appendChild(pageItem);
  }

  // Dodaj strzałkę "Następna"
  const nextPageItem = document.createElement('li');
  nextPageItem.classList.add('page-item');
  if (currentPage === totalPages) {
    nextPageItem.classList.add('disabled');
  }
  const nextPageLink = document.createElement('a');
  nextPageLink.classList.add('page-link');
  nextPageLink.href = '#';
  nextPageLink.textContent = '>';
  nextPageLink.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      displayFilms(currentPage);
    }
  });
  nextPageItem.appendChild(nextPageLink);
  pagination.appendChild(nextPageItem);
}

displayFilms(currentPage);
