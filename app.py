from flask import Flask,render_template

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template("count.html")

@app.route("/count")
def hello():
    return render_template("count.html")

if __name__=="__main__":
    app.run(debug=True)