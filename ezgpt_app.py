from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/hello", methods=["GET"])
def hello():
    return jsonify({"reply": "Hello from EzGPT 🤖, how can I help you today?"})

@app.route("/api/chat", methods=["POST"])
def chat():
    user_msg = request.json.get("message", "").lower()

    # Logic layers
    if "hello" in user_msg or "hi" in user_msg:
        reply = "Hey there 👋, EzGPT here!"
    elif "portfolio" in user_msg:
        reply = "You can check Ezrael’s portfolio at https://ezrael-portfolio-qbh8.vercel.app"
    elif "music" in user_msg:
        reply = "🎶 Visit King Tshaka Music Services: https://ezraeljeremiah-py.github.io/music_web_site/"
    elif "contact" in user_msg:
        reply = "📞 Reach Ezrael via email: ezraeljeremaih@outlook.com or WhatsApp: +265991626001"
    else:
        reply = f"EzGPT 🤖: I received your message → {user_msg}"

    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run(debug=True)

