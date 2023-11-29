
function createGallery(resp) {
    return resp.map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => `
    <li class="photo-card">
        <a class="gallery__link" href="${largeImageURL}">
            <img class="photo" src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
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
</li>
    `).join("")
}

export default createGallery;
