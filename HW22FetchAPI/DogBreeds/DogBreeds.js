let breeds = document.querySelector(".breeds");
let photo = document.querySelector(".photo");

breeds.addEventListener("change", (event) => {
    fetch(`https://dog.ceo/api/breed/${event.target.value}/images/random`)
    .then((response) => {
        console.log(response)
        return response.json();
}).then((data) => {
    console.log(data)
    photo.src = data.message;
    });
});

