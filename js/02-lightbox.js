import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const createGallery = () => {
    galleryItems.map(({ preview, original, description }) => {

    const galleryItem = `<li class="gallery__unit">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`
        
gallery.insertAdjacentHTML('afterbegin', galleryItem);
    })
}

createGallery();

const handleClick = (e) => {
    e.preventDefault();

    if (e.target.nodeName !== "IMG") {
        return;
    }
}
gallery.addEventListener("click", handleClick);


let galleryLight = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});

console.log(galleryItems);
