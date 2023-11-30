import debounce from 'lodash.debounce';
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
import { infoMessage, successMessage, errorMessage } from "./service";
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
    rootMargin: "200px",
    threshold: 1.0,
};

let observer = new IntersectionObserver(handlerLoadMore, options);

refs.form.addEventListener('submit', onSearchSubmit)
window.addEventListener("scroll", debounce(onViewportScroll, 500))

async function onSearchSubmit(evt) {
    evt.preventDefault();
    page = 1;
    searchQuery = evt.target.searchQuery.value.trim().toLowerCase();

    if (searchQuery === "") {
        return infoMessage("Sorry, there are no images matching your search query. Please try again.");
    }
    refs.gallery.innerHTML = '';

    const resp = await searchPhoto(searchQuery, page);

    if (resp.data.hits.length === 0) {
        refs.form.reset();
        return infoMessage("Sorry, there are no images matching your search query. Please try again.");
    }
    successMessage(resp.data.total);

    const total_pages = Math.ceil(resp.data.totalHits / resp.config.params.per_page)

    refs.gallery.innerHTML = createGallery(resp.data.hits);

    gallery.refresh();
    refs.form.reset();

    if (total_pages === 1 || !resp.data.hits) {
        return setTimeout(() => {
            infoMessage("We're sorry, but you've reached the end of search results.")
        }, 5000);
    }
    observer.observe(refs.guard);
}

function handlerLoadMore(entries) {
    entries.forEach(async entry => {
        if (entry.isIntersecting) {
            page += 1;
            const resp = await searchPhoto(searchQuery, page);
            const total_pages = Math.ceil(resp.data.totalHits / resp.config.params.per_page)

            refs.gallery.insertAdjacentHTML('beforeend', createGallery(resp.data.hits));
            gallery.refresh();

            if (page >= 13 || page >= total_pages) {
                observer.disconnect();
                return setTimeout(() => {
                    infoMessage("We're sorry, but you've reached the end of search results.")
                }, 5000);
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
