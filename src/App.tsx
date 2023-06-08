import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '@/pages/home/home.tsx';
import ListRecord from '@/pages/list-record/list-record.tsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
      </Routes>
      <Routes>
        <Route path={`/list`} element={<ListRecord />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
