import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import AppWrapper from "./components/AppWrapper";
import MusicPlayer from "./components/MusicPlayer";
import {Navbar} from './components/Navbar';

function App() {
  return (
      <AppWrapper>
        <Navbar/>
        <MusicPlayer/>
      </AppWrapper>
  );
}

export default App;