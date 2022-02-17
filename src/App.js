import logo from './logo.svg';
import './App.css';
import Header from './components/globals/MainHeader'
import * as paths from './components/globals/paths';
import About from './pages/About/About';
import {Routes as Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route path={paths.ABOUT} element={<About />} />
    </Switch>
    </>
  );
}

export default App;
