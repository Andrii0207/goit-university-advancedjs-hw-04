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
    const data = resp.data;
    let total_pages = data.hits.total / data.hits.totalHits
    console.log("resp load_more >>>", resp)
    console.log("resp.data (load_more) >>>", resp.data)
    refs.gallery.insertAdjacentHTML('beforeend', createGallery(data.hits));
    if (total_pages >= 500 || page >= 13) {
        console.log("click LOAD_MORE")
        return refs.loadMoreBtn.classList.add('visually-hidden')
    }
}

async function onSearchSubmit(evt) {
    evt.preventDefault();
    page = 1;
    searchQuery = evt.target.searchQuery.value;
    const resp = await searchPhoto(searchQuery, page);
    const data = resp.data;
    console.log("resp (submit) >>>", resp)
    console.log("resp.data (submit) >>>", data)
    console.log("data.total (submit) >>>", data.total)

    if (data.hits.lenght === 0) {
        return alert("Incorrect query name, try again")
    }
    if (data.total > 40) {
        refs.loadMoreBtn.classList.remove('visually-hidden')
    }
    refs.gallery.innerHTML = createGallery(data.hits);
    refs.form.reset();
    return;
}

