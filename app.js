const button = document.querySelector('.container button')
const joketext = document.querySelector('.container p')

const getJoke = async () => {
 const config = { headers: {Accept: 'application/json'}}
const jokedata = await axios.get('https://icanhazdadjoke.com/', config)
joketext.innerHTML = jokedata.data.joke
}

button.addEventListener('click' , getJoke);





