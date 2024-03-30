import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { refs, lightbox, displayMessage } from '../main';


export function render(data) {
    if (data.hits.length === 0) {
        displayMessage(
        'Sorry, there are no images matching your search query. Please try again!'
        );
    } else {
        const images = data.hits;

        const markup = images.map(image => 
            `<li class="gallery-item">
                <a class="gallery-link" href="${image.largeImageURL}">
                <img loading="lazy" class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
                </a>
                <div class="stats">
                    <p class="text">Likes<br/>${image.likes}</p>
                    <p class="text">Views<br/>${image.views}</p>
                    <p class="text">Comments<br/>${image.comments}</p>
                    <p class="text">Downloads<br/>${image.downloads}</p>
                </div>
            </li>`).join('');

    refs.gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
    }
}
