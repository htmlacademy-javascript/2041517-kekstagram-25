import {generatePhotos} from './data.js';
const photoContainer = document.querySelector('.pictures')

const similarPhotos = generatePhotos();
const templateFragment = document.querySelector('#picture').content;

const template = templateFragment.querySelector('a');


const similarListFragment = document.createDocumentFragment();

similarPhotos.forEach(({url, likes, comments}) => {
  const photosElement = similarWizardTemplate.cloneNode(true);
  photosElement.querySelector('.picture__img').src = url;
  photosElement.querySelector('.picture__likes').textContent = likes;
  photosElement.querySelector('.picture__comments').textContent = comments;
  similarListFragment.appendChild(photosElement);
});

const loadPhotos = function () {
photoContainer.appendChild(similarListFragment);
};

export {loadPhotos};

