import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton} from "./js/render-functions.js";
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';
const form = document.querySelector(".form");
const input = form.elements["search-text"];
const LoadMoreBtn = document.querySelector(".load-more")

let currentQuerry = "";
let currentPage = 1;
let totalHits = 0;
const PER_PAGE = 15;

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search term.',
        });
        return;
    }
    currentQuerry = query;
    currentPage = 1;
    clearGallery();
    hideLoadMoreButton();
    showLoader();
    
    try {
        const data = await getImagesByQuery(currentQuerry, currentPage);
        totalHits = data.totalHits;
        if (data.hits.length === 0) {
            iziToast.error({
                title: 'No result',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
            return;
        }
        createGallery(data.hits);
    

        if (totalHits > PER_PAGE) {
            showLoadMoreButton();
        }
        else {
            iziToast.info({
              message:
                "We're sorry, but you've reached the end of search results.",
            });
        }
    }
    catch (error) {
        iziToast.error({
            message: "Something went wrong. Please try again.",
        });
    }
    finally {
        hideLoader()
    }
});

LoadMoreBtn.addEventListener("click", async () => {
    currentPage += 1;
    hideLoadMoreButton()
    showLoader();

    try {
        const data = await getImagesByQuery(currentQuerry, currentPage);
        createGallery(data.hits);
        const totalLoaded = currentPage * PER_PAGE;

        if (totalLoaded >= totalHits) {
            hideLoadMoreButton();
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
            });
        }
        else {
            showLoadMoreButton();
        }
        
        const card = document.querySelector(".gallery-item");
        const cardHeight = card.getBoundingClientRect().height;
        window.scrollBy({
            top: cardHeight * 2,
            behavior: "smooth",
        });
    }
    catch (error) {
        iziToast.error({
            message: 'Something went wrong. Please try again.',
        });
    }
    finally {
        hideLoader();
    }
});
    



//     getImagesByQuery(query)
//         .then((data) => {
//             if (data.hits.length === 0) {
//                 iziToast.error({
//                     title: 'No result',
//                     message:
//                         'Sorry, there are no images matching your search query. Please try again!',
//                 });
//                 return;
//             }
//             createGallery(data.hits);
//         })
//         .catch((error) => {
//             iziToast.error({
//                 title: 'Error',
//                 message: 'Something went wrong. Please try again.',
//             });
//             console.error(error);
//         })
//         .finally(() => {
//             hideLoader();
//         });

// });