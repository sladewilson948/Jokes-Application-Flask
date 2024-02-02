const apiURI = "https://joke.deno.dev"


async function generateRandomJokes()
{

    const res = await fetch(apiURI)
    const result = await res.json()

    const ele1 = document.getElementById("setup")
    const ele2 = document.getElementById("punchline")


    const setup = result["setup"].toString()
    const punchline = result["punchline"].toString()


    ele1.textContent = setup
    ele2.textContent = punchline

    
}


