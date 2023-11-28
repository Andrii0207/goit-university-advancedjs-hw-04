import debounce from 'lodash.debounce';
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

const options = {
    root: null,
    rootMargin: "100px",
    threshold: 1.0,
};

let observer = new IntersectionObserver(handlerLoadMore, options);

refs.form.addEventListener('submit', onSearchSubmit)
window.addEventListener("scroll", debounce(onViewportScroll, 500))
// refs.loadMoreBtn.addEventListener('click', handlerLoadMore)

// async function handlerLoadMore() {
//     page += 1;
//     const resp = await searchPhoto(searchQuery, page);
// const data = resp.data;
// let total_pages = data.hits.total / data.hits.totalHits
//     console.log("resp load_more >>>", resp)
//     console.log("resp.data (load_more) >>>", resp.data)
//     refs.gallery.insertAdjacentHTML('beforeend', createGallery(data.hits));
//     if (total_pages >= 500 || page >= 13) {
//         console.log("click LOAD_MORE")
//         return refs.loadMoreBtn.classList.add('visually-hidden')
//     }
// }

async function onSearchSubmit(evt) {
    evt.preventDefault();
    page = 11;
    searchQuery = evt.target.searchQuery.value;

    if (searchQuery === "") {
        return infoMessage("Sorry, there are no images matching your search query. Please try again.");
    }
    observer.observe(refs.guard)

    const resp = await searchPhoto(searchQuery, page);
    const data = resp.data;
    console.log("resp (submit) >>>", resp)
    console.log("resp.data (submit) >>>", data)
    console.log("data.total (submit) >>>", data.total)
    console.log("data.hits.length (submit) >>>", data.hits.length)

    if (data.hits.length === 0) {
        infoMessage("Sorry, there are no images matching your search query. Please try again.");
        return refs.form.reset();
    }
    successMessage(data.total)

    refs.gallery.innerHTML = createGallery(data.hits);
    refs.form.reset();
    return;
}

function handlerLoadMore(entries) {
    entries.forEach(async entry => {
        console.log(entry)
        if (entry.isIntersecting) {
            page += 1;
            const resp = await searchPhoto(searchQuery, page);

            refs.gallery.insertAdjacentHTML('beforeend', createGallery(resp.data.hits))

            if (page >= 13) {
                observer.disconnect();
                return setTimeout(() => {
                    infoMessage("We're sorry, but you've reached the end of search results.")
                }, 9000);
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
