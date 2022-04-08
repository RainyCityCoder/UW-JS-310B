document.addEventListener("DOMContentLoaded", function() {

const baseURL = `https://api.nytimes.com/svc/books/v3/lists/`;
let srchBtn = document.getElementById('srchBtn');
let dateField = document.getElementById('date');
let date = '';
let apiKey = '';


const leGrandeFunction = (function(e) {
    e.preventDefault();
    date = dateField.value;
    //Needed to move url definition from global scope.
    let url = `${baseURL}${date}/hardcover-fiction.json?api-key=${apiKey}`;

    fetch(url)
        .then((data) => {
            return data.json();
        })
        .then((resultsJson) => {
            //Decided to try the loop after all. Soooo much easier to read.
            for (let i = 1; i < 6; i++) {
            /**
             * Requirements state "Extra Credit 1 pt: For Bestselling Books, 
             * also display the image for each book". Since all the books are 
             * best-selling (per https://developer.nytimes.com/docs/books-product/1/overview), 
             * they all get a photo.
             * let oprah = (() => {
             *      let counter = 0;
             *      if (counter < 2) {
             *          console.log(`You get a photo!`);
             *          counter++;
             *      } else {
             *          console.log(`EVERYONE GETS A PHOTO!!!`);
             *      }
             * })
             */
                document.getElementById(`result-${i}-title`).innerText = resultsJson.results.books[i].title;
                document.getElementById(`result-${i}-author`).innerText = resultsJson.results.books[i].author;
                document.getElementById(`result-${i}-descr`).innerText = resultsJson.results.books[i].description;
                document.getElementById(`result-${i}-photo`).setAttribute('src', resultsJson.results.books[i].book_image);
            }            
        });
});

srchBtn.addEventListener("click", leGrandeFunction, true);

});
