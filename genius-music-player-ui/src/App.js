import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {Navbar} from './components/Navbar';
import GlobalStyles from './Globalstyles.js';

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Navbar/>

    </Router>
  );
}

export default App;