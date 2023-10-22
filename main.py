from flask import Flask, render_template
import requests



app = Flask(__name__)

@app.route("/", methods=["GET","POST"])
def index():
    final_list = get_jokes()
    return render_template("index.html", data=final_list)


def get_jokes():
    list_of_jokes = []
    for _ in range(10):
        r = requests.get("https://joke.deno.dev")
        data = r.json()
        list_of_jokes.append([data["setup"], data["punchline"]])
    
    return list_of_jokes



if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
