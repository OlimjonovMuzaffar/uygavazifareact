import { useState } from "react";
import randomColor from "./randomcolor";
import "./App.css";

function App() {
  let [cards, setcolorCard] = useState(randomColor);
  function refresh() {
    setcolorCard(randomColor);
  }

  return (
    <div>
      {cards.map((e) => {
        function BodyColor() {
          document.body.style.backgroundColor = e;
        }
        return (
          <ul key={e}>
            <li style={{ background: e }} onClick={BodyColor}>
              {e}
            </li>
          </ul>
        );
      })}
      <button onClick={refresh}>Refresh</button>
    </div>
  );
}

export default App;
