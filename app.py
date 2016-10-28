from flask import Flask
from flask import render_template
app = Flask(__name__)

# @app.route('/')
# def hello_world():
#     return 'Hello, World!'


@app.route('/')
# @app.route('/<name>')
def index():
    return render_template("index.html")


# @app.route('/<myth>')
# # @app.route('/<name>')
# def myth(myth='Myth'):
#     return render_template("myth.html", myth = myth)


@app.route('/myth')
# @app.route('/<name>')
def myth():
    return render_template("myth.html")

@app.route('/hercules')
# @app.route('/<name>')
def hercules():
    return render_template("hercules.html")

@app.route('/hero')
# @app.route('/<name>')
def hero():
    return render_template("hero.html")

@app.route('/heroes')
# @app.route('/<name>')
def heroes():
    return render_template("heroes.html")

@app.route('/herotest')
# @app.route('/<name>')
def herotest():
    return render_template("herotest.html")

#runs the app
app.run(debug=True, port=8000, host='0.0.0.0')
