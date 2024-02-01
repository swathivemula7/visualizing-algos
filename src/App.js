
import './App.css';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import HeaderSorting from './SortingComponent/HeaderSorting';
import HomeSorting from './SortingComponent/HomeSorting';
import Home from './HomeComponent/Home';


function App() {
  return (
    <Router>
    
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/sorting" className="container" element={<><HeaderSorting /><HomeSorting /></>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
