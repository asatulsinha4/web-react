import logo from './logo.svg';
import './App.css';
import Header from './components/globals/MainHeader'
import * as paths from './components/globals/paths';
import About from './pages/About/About';
import Home from './pages/Home';
import {Routes as Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route path={paths.ABOUT} element={<About />} />
      <Route path="" element={<Home />} />
    </Switch>
    </>
  );
}

export default App;
