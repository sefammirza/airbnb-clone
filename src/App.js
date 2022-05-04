import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SearchPage from './SearchPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/search" element={<SearchPage/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
      
      
      
      
    </div>
  );
}

export default App;
