import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GerarPdf from './pages/Cadastro de pdf/gerarPdf';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cad-produto' element={<GerarPdf/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
