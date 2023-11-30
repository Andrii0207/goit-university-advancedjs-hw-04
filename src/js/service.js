import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

function infoMessage(message) {
    iziToast.info({
        title: 'INFO',
        message,
        timeout: 3000,
        position: "topLeft",
        color: "yellow",
    });
}

function successMessage(totalHits) {
    iziToast.success({
        title: 'SUCCESS',
        message: `Hooray! We found ${totalHits} images.`,
        timeout: 3000,
        position: "topLeft",
        color: "green",
    });
}

function errorMessage(error) {
    iziToast.error({
        title: 'Error',
        message: `${error}`,
        timeout: 3000,
        position: "topLeft",
    });
}

export { infoMessage, successMessage, errorMessage };