

function createGallery(resp) {
    return resp.map(({ largeImageURL, tags, likes, views, comments, downloads }) => `<div class="photo-card">
    <img class="photo" src="${largeImageURL}" alt="${tags}" loading="lazy" />
    <div class="info">
        <p class="info-item">
            <b>Likes:</b> ${likes}
        </p>
        <p class="info-item">
            <b>Views:</b> ${views}
        </p>
        <p class="info-item">
            <b>Comments:</b> ${comments}
        </p>
        <p class="info-item">
            <b>Downloads:</b> ${downloads}
        </p>
    </div>
</div>`).join("")
}

export default createGallery;

// webformatURL - посилання на маленьке зображення для списку карток.
// largeImageURL - посилання на велике зображення.
// tags - рядок з описом зображення.Підійде для атрибуту alt.
// likes - кількість лайків.
// views - кількість переглядів.
// comments - кількість коментарів.

// downloads - кількість завантажень.