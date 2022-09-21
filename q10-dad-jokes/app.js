const jokeEl = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

//when page refreshed it not display joke
const showNewJoke = async () => {
    const jokeText = await getDadJoke();
    jokeEl.innerHTML = jokeText;
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json" } };
        const res = await axios.get("https://icanhazdadjoke.com", config);
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :(";
    }
}

jokeBtn.addEventListener("click", showNewJoke)


//when page refreshed it display joke

// jokeBtn.addEventListener('click', generateJoke)

// generateJoke()

// // USING ASYNC/AWAIT
// async function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   const res = await fetch('https://icanhazdadjoke.com', config)

//   const data = await res.json()

//   jokeEl.innerHTML = data.joke
// }

//======================================================================//

// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }