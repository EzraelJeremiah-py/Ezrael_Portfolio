import { useState, useEffect } from "react";

export default function EzGPT() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  // Fetch greeting when chat opens
  useEffect(() => {
    if (open) {
      fetch("https://ezgpt.onrender.com/api/hello")
        .then(res => res.json())
        .then(data => setMessages([{ from: "EzGPT", text: data.reply }]))
        .catch(err => console.error("Error fetching greeting:", err));
    }
  }, [open]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    try {
      const res = await fetch("https://ezgpt.onrender.com/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });
      const data = await res.json();
      setMessages([...messages, { from: "user", text: input }, { from: "EzGPT", text: data.reply }]);
      setInput("");
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return (
    <div className="position-fixed bottom-0 end-0 m-3">
      {!open ? (
        <button className="btn btn-primary rounded-circle p-3" onClick={() => setOpen(true)}>
          💬
        </button>
      ) : (
        <div className="p-3 bg-light border rounded shadow" style={{width:"300px"}}>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="fw-bold text-primary m-0">EzGPT 💬</h6>
            <button className="btn btn-sm btn-outline-secondary" onClick={() => setOpen(false)}>✖</button>
          </div>
          <div style={{maxHeight:"200px", overflowY:"auto"}}>
            {messages.map((m, i) => (
              <p key={i} className={m.from === "user" ? "text-end text-success" : "text-start text-primary"}>
                {m.text}
              </p>
            ))}
          </div>
          <div className="d-flex mt-2">
            <input 
              className="form-control me-2"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button className="btn btn-primary" onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
