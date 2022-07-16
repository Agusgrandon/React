
//@ts-check
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';





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
    <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;