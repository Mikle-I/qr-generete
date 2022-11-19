import { useState } from "react";
import QRCode from "react-qr-code";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <h1> Содержимое QR-Кода</h1>
      <div className="flex">
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Введите сслыку для QR кода"
        />
        <QRCode value={value} />
      </div>
    </div>
  );
}

export default App;
