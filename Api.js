let baseURL = "https://rickandmortyapi.com/api/character/98"

let click = document.getElementById("click");
console.log(click)

click.addEventListener('click', function () {
    console.log("string")

    fetch(baseURL)

        .then(function (response) {
            console.log(response)
            return response.json();
        })
        .catch(err => {
            console.error(err)
        })
        .then(function (json) {
            let character = json;
            console.log(character)

            let imgItem = document.createElement('img');
            imgItem.src=character.image
            imgItem.setAttribute("id","Creature")
            document.getElementById('potato').appendChild(imgItem)
        })
})