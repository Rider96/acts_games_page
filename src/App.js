import { HashRouter } from "react-router-dom";
import Router from "./routes/router";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Router />
      </HashRouter>
    </div>
  );
}

export default App;
