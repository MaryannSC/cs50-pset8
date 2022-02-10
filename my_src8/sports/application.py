#import os
from cs50 import SQL
from flask import Flask, render_template, request, redirect
# from flask_mail import Mail, Message

app = Flask(__name__)

# app.config["MAIL_DEFAULT_SENDER"] = os.getenv("MAIL_DEFAULT_SENDER")
# app.config["MAIL_PASSWORD"] = os.getenv("MAIL_PASSWORD")
# app.config["MAIL_PORT"] = 587
# app.config["MAIL_SERVER"] = "smpt.gmail.com"
# app.config["MAIL_USE_TLS"] = True
# app.config["MAIL_USERNAME"] = os.getenv("MAIL_USERNAME")
# mail = Mail(app)

db = SQL("sqlite:///sports.db")

SPORTS = [
    "Dodgeball",
    "Flag Football",
    "Soccer",
    "Volleyball",
    "Ultimate Frisbee",
    "Swimming"
]

#REGISTRANTS = {}

@app.route("/")
def index():
    return render_template("index.html", sports=SPORTS)

@app.route("/register", methods=["POST"])
def register():
    name = request.form.get("name")
    if not name:
        return render_template("error.html", message="Missing name")
    sport = request.form.get("sport")
    if not sport:
        return render_template("error.html", message="Missing sport")
    if sport not in SPORTS:
        return render_template("error.html", message="Invalid sport")

#    REGISTRANTS[name] = sport
    db.execute("INSERT INTO registrants (name, sport) VALUES(?, ?)", name, sport)

    # message = Message("You are registered!", recipients=[email])
    # mail.send(message)

    return redirect("/registrants")

@app.route("/registrants")
def registrants():
#    return render_template("success.html", registrants=REGISTRANTS)
    rows = db.execute("SELECT * FROM registrants")
    return render_template("success.html", rows = rows)