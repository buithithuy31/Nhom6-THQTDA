import './App.css';
import HomePage from './Pages/HomePage/HomePage';

import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>

        <Route path="/home" element={<HomePage />} />

        
      </Routes>
    </>
  );
}

export default App;
