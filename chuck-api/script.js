const chuckURL = "https://api.chucknorris.io/jokes/random";
const showJoke = document.querySelector('#chuks-joke');
const btn = document.querySelector('#btn');

const fetchChuckJoke = () => {

    fetch(chuckURL)
        .then(response =>{
            if(!response.ok) {
                throw Error("Woow something went wrong!");
                } 
                return response.json()
                })
        .then(data => {
                const joke = data.value
                showJoke.textContent = joke; 
                })
        .catch (err => console.log(err));
}

btn.addEventListener('click', fetchChuckJoke);

fetchChuckJoke()