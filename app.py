from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow frontend (Vercel) to fetch

portfolio = {
    "skills": ["Data analysis....using Excel, Python, R ", "Systems/website developer.....python, PHP, HTML, CSS, Javascripts","Flameworks.....Flask, Yii2, React JS, Next JS","Machine Learning", "ICT devices" ],
    "qualifications": ["BSc Data Science", "IT", "COMMUNICATION SKILLS"],
    "projects": [
        {"name": "IT/ICT ", "desc": "Software and Hardware troubleshooting, devices configurations....programs installations,networking configurations"},
        {"name": "music services advertisements", "desc": "https://ezraeljeremiah-py.github.io/music_web_site/"},
        {"name": "AI powered parent engagement school system", "desc": "On progress project"}
    ],
    "contact": {
        "email": "ezraeljeremaih@outlook.com",
        "email2": "ezrajeremiah14@gmail.com",
        "phone":"+265991626001......whatsapp",
        "phone2":"0620150832...online/offline",
        "github": "https://github.com/EzraelJeremiah-py"
    }
}

@app.route("/api/portfolio", methods=["GET"])
def get_portfolio():
    return jsonify(portfolio)

if __name__ == "__main__":
    app.run(debug=True)

