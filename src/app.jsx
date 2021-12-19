import Login from './components/login/login';
import styles from './app.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Maker from './components/maker/maker';

function App({authService}) {
  return <div class={styles.app}>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login authService={authService}/>} />
        <Route exact path='/maker' element={<Maker />} />
      </Routes>
    </BrowserRouter>
    
  </div>
}

export default App;
