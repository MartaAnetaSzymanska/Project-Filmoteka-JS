import { getTrendingFilms } from './get-trending';
import { makeSingleFilmTile } from './make_single_tile';

document.addEventListener('DOMContentLoaded', () => {
  const filmsContainer = document.getElementById('films-container');
  const pagination = document.getElementById('pagination');

  if (!filmsContainer || !pagination) {
    console.error(
      'Cannot find elements with id "films-container" or "pagination"'
    );
    return;
  }

  const pageSize = 20;
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
    pagination.innerHTML = '';

    const pageRange = 2;

    let startPage = currentPage - pageRange;
    let endPage = currentPage + pageRange;

    startPage = Math.max(startPage, 1);
    endPage = Math.min(endPage, totalPages);

    const previousPageItem = document.createElement('li');
    previousPageItem.classList.add('page-item');
    if (currentPage === 1) {
      previousPageItem.classList.add('disabled');
    }
    const previousPageLink = document.createElement('a');
    previousPageLink.classList.add('page-link');
    previousPageLink.href = '#';
    previousPageLink.textContent = '<';
    previousPageLink.addEventListener('click', (event) => {
      event.preventDefault();
      if (currentPage > 1) {
        currentPage--;
        displayFilms(currentPage);
      }
    });
    previousPageItem.appendChild(previousPageLink);
    pagination.appendChild(previousPageItem);

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
      pageLink.addEventListener('click', (event) => {
        event.preventDefault();
        currentPage = i;
        displayFilms(currentPage);
      });

      pageItem.appendChild(pageLink);
      pagination.appendChild(pageItem);
    }

    const nextPageItem = document.createElement('li');
    nextPageItem.classList.add('page-item');
    if (currentPage === totalPages) {
      nextPageItem.classList.add('disabled');
    }
    const nextPageLink = document.createElement('a');
    nextPageLink.classList.add('page-link');
    nextPageLink.href = '#';
    nextPageLink.textContent = '>';
    nextPageLink.addEventListener('click', (event) => {
      event.preventDefault();
      if (currentPage < totalPages) {
        currentPage++;
        displayFilms(currentPage);
      }
    });
    nextPageItem.appendChild(nextPageLink);
    pagination.appendChild(nextPageItem);
  }

  displayFilms(currentPage);
});
