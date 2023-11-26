import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29711315-8270253fad608a552f88c48ec';

function searchPhoto(searchQuery, page = 1) {
    // return fetch(`${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=horizontal&safesearch=true`)
    return axios({
        baseURL: BASE_URL,
        params: {
            key: API_KEY,
            q: searchQuery,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            page,
            per_page: 40,
        }
    });
}

export default searchPhoto;
