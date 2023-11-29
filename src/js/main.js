import debounce from 'lodash.debounce';
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
import { infoMessage, successMessage } from "./service";
import searchPhoto from '/js/api';
import createGallery from './markup';

const refs = {
    form: document.querySelector('.search-form'),
    input: document.querySelector('.input'),
    btn: document.querySelector('.submit-btn'),
    gallery: document.querySelector('.gallery'),
    guard: document.querySelector('.js-guard'),
    buttonUp: document.querySelector('.button-up')
}

let page = 1;
let searchQuery;

const gallery = new SimpleLightbox(".gallery a", {
    showCounter: false,
    captionDelay: 250,
    captionPosition: "bottom",
    close: false,
    overlayOpacity: 1,
    captionsData: `alt`
})

const options = {
    root: null,
    rootMargin: "100px",
    threshold: 1.0,
};

let observer = new IntersectionObserver(handlerLoadMore, options);

refs.form.addEventListener('submit', onSearchSubmit)
window.addEventListener("scroll", debounce(onViewportScroll, 500))

async function onSearchSubmit(evt) {
    evt.preventDefault();
    page = 1;
    searchQuery = evt.target.searchQuery.value;

    if (searchQuery === "") {
        return infoMessage("Sorry, there are no images matching your search query. Please try again.");
    }
    observer.observe(refs.guard)

    const resp = await searchPhoto(searchQuery, page);

    if (resp.data.hits.length === 0) {
        infoMessage("Sorry, there are no images matching your search query. Please try again.");
        return refs.form.reset();
    }
    successMessage(resp.data.total)

    refs.gallery.innerHTML = createGallery(resp.data.hits);
    gallery.refresh();
    refs.form.reset();
    return;
}

function handlerLoadMore(entries) {
    entries.forEach(async entry => {
        if (entry.isIntersecting) {
            page += 1;
            const resp = await searchPhoto(searchQuery, page);

            refs.gallery.insertAdjacentHTML('beforeend', createGallery(resp.data.hits));
            gallery.refresh();

            if (page >= 13) {
                observer.disconnect();
                return setTimeout(() => {
                    infoMessage("We're sorry, but you've reached the end of search results.")
                }, 7000);
            }
        }
    });
}

function onViewportScroll() {
    if (window.scrollY >= 1000) {
        refs.buttonUp.classList.toggle('visually-hidden', false);
    } else {
        refs.buttonUp.classList.toggle('visually-hidden', true);
    }
}
