let breeds = document.querySelector(".breeds");
let photo = document.querySelector(".photo");

fetch("https://dog.ceo/api/breeds/list/all")
.then((response) => {
	return response.json();
}).then((data) => {
	Object.keys(data.message).forEach((el) => {
    let option = document.createElement("option");
    option.text = el;
    breeds.add(option);
  });
})

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



