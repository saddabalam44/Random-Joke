let jokeTextEl = document.getElementById('jokeText');
let jokeBtnEl = document.getElementById('jokeBtn');
let spinnerEl = document.getElementById('spinner');


function randonJoke() {
    spinnerEl.classList.remove("d-none");

    let url = "https://apis.ccbp.in/jokes/random";

    let options = {
        method: "GET"
    };

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            jokeTextEl.textContent = jsonData.value;
        })
        .finally(function() {
            spinnerEl.classList.add("d-none");
        });
}



jokeBtnEl.addEventListener("click", randonJoke);