import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5005/api/message")
      .then((res) => {
        setMessage(res.data.message);
      });
  }, []);

  return (
    <div>
      <h1>DevOps Full Stack App</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;