import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  
  const [color, setColor] = useState('#212121')
  return (
    <div className="w-full h-screen bg-black text-white text-3xl" style={{backgroundColor: color}} >

      <button onClick={() => setColor('#6e1115')}>--red--</button>
      <button onClick={() => setColor('#135626')}>--grn--</button>
      <button onClick={() => setColor('#18449d')}>--blu--</button>
    </div>
  );
}

export default App;
