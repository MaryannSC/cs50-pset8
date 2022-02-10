from cs50 import SQL
from flask import Flask, render_template, request, session, redirect
from flask_session import Session

app = Flask(__name__)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

db = SQL("sqlite:///books.db")

@app.route("/")
def index():
    book_rows = db.execute("SELECT * FROM books")
    return render_template("index.html", book_rows = book_rows)

#db.execute("")
