import searchPhoto from '/js/api';
import createGallery from './markup';


const refs = {
    form: document.querySelector('.search-form'),
    input: document.querySelector('.input'),
    btn: document.querySelector('.submit-btn'),
    gallery: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('.load-more')
}
refs.loadMoreBtn.classList.add('visually-hidden')
let page = 1;
let searchQuery;

refs.form.addEventListener('submit', onSearchSubmit)
refs.loadMoreBtn.addEventListener('click', handlerLoadMore)

async function handlerLoadMore() {
    page += 1;
    const resp = await searchPhoto(searchQuery, page);
    console.log(resp)
    refs.gallery.insertAdjacentHTML('beforeend', createGallery(resp.data.hits));
}


async function onSearchSubmit(evt) {
    evt.preventDefault();
    searchQuery = evt.target.searchQuery.value;
    const resp = await searchPhoto(searchQuery, page);
    console.log(resp.data)

    if (resp.data.hits.length === 0) {
        return alert("Please, try again")
    }
    // console.log(resp.config.params)
    refs.loadMoreBtn.classList.toggle('visually-hidden')

    // if (page >= 26 || resp.data.totalHits >= 500) {
    //     return refs.loadMoreBtn.classList.add('visually-hidden')

    // }

    refs.gallery.innerHTML = createGallery(resp.data.hits);
    refs.form.reset();
    return;
}

