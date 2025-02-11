import React, {useState} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';




export default function App() {
  const [cartCount, setCartCount] = useState(0);
  

  return (
      <BrowserRouter>
        <NavBar cartCount={cartCount} />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Bienvenido a TECHNOLOGY!"setCartCount={setCartCount}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting="Categoria"setCartCount={setCartCount}/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer setCartCount={setCartCount} />} />
            <Route path='*' element={() => <h1>404 NOT FOUND </h1>} />
          </Routes>
      </BrowserRouter>
  );
}


