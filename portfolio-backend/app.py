from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow frontend (Vercel) to fetch

portfolio = {
    "skills": ["Flask", "Data Science", "Machine Learning", "IT / ICT", "YII2 Framework"],
    "qualifications": ["BSc Computer Science", "Intermediate Flask Developer"],
    "projects": [
        {"name": "IoT Device Monitoring", "desc": "Simulated dashboard for sensors"},
        {"name": "Data Analysis", "desc": "Analysis of data using Python, PyExcel and R"},
        {"name": "AI powered parent engagement school system", "desc": "NLP pipeline for reviews"}
    ],
    "contact": {
        "email": "ezraeljeremaih@outlook.com",
        "email2": "ezrajeremiah14@gmail.com",
        "github": "https://github.com/EzraelJeremiah-py"
    }
}

@app.route("/api/portfolio", methods=["GET"])
def get_portfolio():
    return jsonify(portfolio)

if __name__ == "__main__":
    app.run(debug=True)
