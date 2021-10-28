const joke=document.getElementById("joke");
const button=document.getElementById("button");

button.addEventListener("click",showJoke)

showJoke()

async function showJoke(){
    const result= await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit")
    const answer= await result.json();
    console.log(answer);

    let randomJoke="";
    if (answer.joke==undefined){
        randomJoke= `${answer.setup}  ${answer.delivery}`
    }else{
    randomJoke= answer.joke;
    }
    joke.innerHTML=randomJoke;
}

