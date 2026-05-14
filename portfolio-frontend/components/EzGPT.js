import { useState, useEffect } from "react";

export default function EzGPT() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Greeting on load
  useEffect(() => {
    const fetchGreeting = async () => {
      const res = await fetch("https://ezgpt.onrender.com/api/hello");
      const data = await res.json();
      setMessages([{ from: "EzGPT", text: data.reply }]);
    };
    fetchGreeting();
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const res = await fetch("https://ezgpt.onrender.com/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });
    const data = await res.json();
    setMessages([...messages, { from: "user", text: input }, { from: "EzGPT", text: data.reply }]);
    setInput("");
  };

  return (
    <div className="position-fixed bottom-0 end-0 m-3 p-3 bg-light border rounded shadow" style={{width:"300px"}}>
      <h6 className="fw-bold text-primary">EzGPT 💬</h6>
      <div className="mb-2" style={{maxHeight:"200px", overflowY:"auto"}}>
        {messages.map((m, i) => (
          <p key={i} className={m.from === "user" ? "text-end text-success" : "text-start text-primary"}>
            {m.text}
          </p>
        ))}
      </div>
      <div className="d-flex">
        <input 
          className="form-control me-2"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button className="btn btn-primary" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

