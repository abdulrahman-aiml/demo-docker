from flask import Flask, render_template
import warnings
warnings.filterwarnings('ignore')

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/services')
def services():
    return render_template('services.html')

if __name__ == "__main__":
    app.run(debug=True, host= "0.0.0.0", port = 443)