import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import PostDetail from './Components/PostDetail/PostDetail';

function App() {
  return (
    <div style={{textAlign:'center'}}>
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to='/'> empty
            </Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path='/post/:id'>
            <PostDetail></PostDetail>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
