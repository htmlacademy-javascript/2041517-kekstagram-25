import {generatePhotos} from './data.js';
const photoContainer = document.querySelector('.pictures');
photoContainer.classList.remove('.visually-hidden');
photoContainer.children.classList.remove('.visually-hidden');

const similarPhotos = generatePhotos();
const templateFragment = document.querySelector('#picture').content.querySelector('.picture');

const similarListFragment = document.createDocumentFragment();

similarPhotos.forEach(({url, likes, comments}) => {
  const photosElement = templateFragment.cloneNode(true);
  photosElement.querySelector('.picture__img').src = url;
  photosElement.querySelector('.picture__likes').textContent = likes;
  photosElement.querySelector('.picture__comments').textContent = comments.length;
  similarListFragment.appendChild(photosElement);
});

const loadPhotos = function () {
photoContainer.appendChild(similarListFragment);
};

export {loadPhotos};

