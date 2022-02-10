from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/", methods=["GET","POST"])
def index():
    if request.method == "GET":
        return render_template("index.html")
    if request.method == "POST":
        return render_template("greet.html", name=request.form.get("name", "world"))

# default methods=["GET"]
# name=request.args.get("name", "world") works with GET
# name=request.form.get("name", "world") works with POST

#@app.route("/greet", methods=["POST"])
#def greet():
#    return render_template("greet.html", name=request.form.get("name", "world"))


