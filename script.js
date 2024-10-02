const form = document.getElementById("form");
const search = document.getElementById("query");
const main = document.getElementById("section");

// API call to your backend
const API_URL = "/api/movies"; 

function returnMovies(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            main.innerHTML = ""; // Clear the section before adding new movies
            data.results.forEach(element => {
                const div_card = document.createElement("div");
                div_card.setAttribute("class", "card");

                const div_row = document.createElement("div");
                div_row.setAttribute("class", "row");

                const div_column = document.createElement("div");
                div_column.setAttribute("class", "column");

                const image = document.createElement("img");
                image.setAttribute("class", "thumbnail");

                const title = document.createElement("h3");

                const center = document.createElement("center");

                title.innerHTML = element.title;
                image.src = `https://image.tmdb.org/t/p/w1280${element.poster_path}`;
                center.appendChild(image);
                div_card.appendChild(center);
                div_card.appendChild(title);
                div_column.appendChild(div_card);
                div_row.appendChild(div_column);
                main.appendChild(div_row);
            });
        });
}

// Handle form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = ""; // Clear the section before searching new movies
    const searchItem = search.value;
    if (searchItem) {
        returnMovies(`${API_URL}?query=${searchItem}`);
        search.value = "";
    }
});
