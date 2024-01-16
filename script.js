const apiURI = "https://joke.deno.dev"


function generateRandomJokes()
{
    fetch(apiURI)
    .then(response =>{

        if(!response.ok)
        {
            throw new Error("Httop Error!!")
        }
        return response.json()
    })
    .then(data => {
        console.log(data)
        const ele1 = document.getElementById("setup")
        const ele2 = document.getElementById("punchline")
        const setup = data["setup"].toString()
        const punchline = data["punchline"].toString()
        ele1.textContent = setup
        ele2.textContent = punchline
    })
    .catch(error => {
        console.log(error)
    })
}


