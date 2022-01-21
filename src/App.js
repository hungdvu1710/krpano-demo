import "./App.css";
import { useEffect } from "react";

function App() {
  const script = document.createElement("script");
  script.innerHTML = `embedpano({xml:"tour.xml", target:"pano", html5:"only", mobilescale:1.0, passQueryParameters:"startscene,startlookat"});`;
  useEffect(() => {
    document.getElementById("pano").appendChild(script);
  });
  return (
    <div className="App">
      <div id="pano"></div>
    </div>
  );
}

export default App;
