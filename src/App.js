import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import NavBar from './components/navbar';
import Footer from './components/Footer';



function App() {

  return (
    
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path="/">
            <Route index element={<Home/>}></Route>
          </Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
