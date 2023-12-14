const jokeButton = document.getElementById("getJoke");
let jokeDisplay = document.getElementById("display");


async function apiCall(){
    const data = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json",
        }
    });

    return data.json();
}



jokeButton.addEventListener("click", function(event){
    async function apiData(){
        const jokeData = await apiCall();
    
        jokeDisplay.value = jokeData.joke;
    };
    
    jokeDisplay.value = "Updating...";

    const myTimeout = setTimeout(myGreeting, 2000);

    function myGreeting() {
        apiData();
    }

    function myStopFunction() {
    clearTimeout(myTimeout);
    }

})

