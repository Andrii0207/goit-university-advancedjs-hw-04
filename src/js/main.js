const refs = {
    form: document.querySelector('.form-search-gallery'),
    input: document.querySelector('.input'),
    btn: document.querySelector('.submit-btn'),
    gallery: document.querySelector('.img-collection')
}


refs.form.addEventListener('submit', onSearchSubmit)

function onSearchSubmit(evt) {
    evt.preventDefault()

    console.log(evt.target.input.value)
}