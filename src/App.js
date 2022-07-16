
//@ts-check
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartWidget from './components/CartWidget';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';





function App() {

  return (
    <>
    <BrowserRouter>
    <div>
    <NavBar/>
    </div>
    <Routes>
    <Route path="/" element={<ItemListContainer/>} />
    <Route path="/category/:idCategory" element={<ItemListContainer/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;