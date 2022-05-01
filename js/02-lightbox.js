import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const createGallery = () => {
    galleryItems.map(({ preview, original, description }) => {

    const galleryItem = `<div class="gallery__unit">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`
        
gallery.insertAdjacentHTML('afterbegin', galleryItem);
    })
}

createGallery();

let galleryLight = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});

console.log(galleryItems);
