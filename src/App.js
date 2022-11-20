import { Route, Routes } from 'react-router-dom';
import './App.css';
import DayShedule from './pages/DayShedule';
import Home from './pages/Home';
function App() {
  return (
    <>
    <Routes>
      <Route  path='/' element={<Home/>}></Route>
      <Route path='/Hour' element={<DayShedule/>}></Route>
    </Routes>
    </>
  );
}

export default App;
