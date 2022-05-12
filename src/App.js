import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import NotFound from './components/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
