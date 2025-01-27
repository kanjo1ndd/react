import logo from './logo.svg';
import './App.css';
import { MainPage } from './Components/navigator.jsx'
import { Mdse, Rooms, Design, NotFound } from './Components/pages.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>} >
          <Route index element = {<Mdse/>} />
          <Route path="mdse" element={<Mdse/>} />
          <Route path="rooms" element={<Rooms/>} />
          <Route path="design" element={<Design/>} />
          <Route path="*" element= {<NotFound/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;