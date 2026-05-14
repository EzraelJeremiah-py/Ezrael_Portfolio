from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow frontend (Vercel) to fetch

portfolio = {
    "skills": [
        "Data analysis (Excel, Python, R)",
        "Systems/website development (Python, PHP, HTML, CSS, JavaScript)",
        "Frameworks (Flask, Yii2, React.js, Next.js)",
        "Machine Learning",
        "ICT devices",
        "React.js",
        "JavaScript"
    ],
    "qualifications": [
        "BSc Data Science",
        "IT",
        "Communication Skills"
    ],
    "projects": [
        {
            "name": "IT/ICT",
            "desc": "Software & hardware troubleshooting, device configurations, program installations, networking setups"
        },
        {
            "name": "Music Services Advertisements",
            "desc": "https://ezraeljeremiah-py.github.io/music_web_site/"
        },
        {
            "name": "AI Powered Parent Engagement School System",
            "desc": "On-progress project"
        }
    ],
    "contact": {
        "email": "ezraeljeremaih@outlook.com",
        "email2": "ezrajeremiah14@gmail.com",
        "phone": "+265991626001 (WhatsApp)",
        "phone2": "0620150832 (online/offline)",
        "github": "https://github.com/EzraelJeremiah-py"
    }
}

@app.route("/api/portfolio", methods=["GET"])
def get_portfolio():
    return jsonify(portfolio)

if __name__ == "__main__":
    app.run(debug=True)
