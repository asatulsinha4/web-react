import logo from './logo.svg';
import './App.css';
import Header from './components/globals/MainHeader'
import * as paths from './components/globals/paths';
import About from './pages/About/About';
import Home from './pages/Home';
import {Routes as Switch, Route} from 'react-router-dom';
import BackdropFilter from './Test/BackdropFilter';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  header: {
    zIndex: 999,
    position: 'fixed',
    left: 0,
    right: 0,
  }
})

function App() {
  return (
    <div >
    <Header />
    <Switch>
      <Route path={paths.ABOUT} element={<About />} />
      <Route path="" element={<Home />} />
      <Route path={paths.PERSONAL_PROJECTS} element={<BackdropFilter />} />
    </Switch>
    </div>
  );
}

export default App;
