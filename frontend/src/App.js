import "./App.css";
import Sidebar from "./components/big_contents/sidebar/Sidebar";
import Holder from "./components/big_contents/holder/Holder";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar></Sidebar>
        <Holder></Holder>
      </div>
    </BrowserRouter>
  );
}

export default App;
