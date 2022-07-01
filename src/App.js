
//@ts-check
import './App.css';
import CartWidget from './components/CartWidget';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemList from './components/ItemList';




function App() {

  let initial = 1
  let stock = 5

  function onAdd(valor) {
    alert("¡Agregado al carrito!")
  }
  return (
    <div className="App">
       <header className="App-header">
       <NavBar/>
       <CartWidget/>
       </header>
       <main>
       <br/>
       <br/>
       <br/>
       <ItemListContainer greeting= "Las últimas novedades"/>
       <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>
       </main>
    </div>
  );
}

export default App;