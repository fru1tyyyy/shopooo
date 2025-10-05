import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hardware from "./pages/Hardware";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Hardware" element={<Hardware/>}/>
      </Routes>
    </Router>
  )
}

export default App;
