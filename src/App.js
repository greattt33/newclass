import EnterDetail from "./components/enterDetail"
import Home from "./components/home"
import Navigation from "./components/navigation"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"



function App() {
  return (
    <div className="App">
      <Router>
  
         <Navigation/>
         <Routes>
           <Route path="/" element={<Home />}/>
           <Route path="/enterdetail" element={<EnterDetail />}/>
           
           
         </Routes>
      </Router>
    </div>
  );
}

export default App;
