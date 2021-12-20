// import "./App.css";
import Nav from "./components/Nav/Nav";
import { Challenges } from "./pages/Challenges";
import { Homepage } from "./pages/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Challenge } from "./pages/Challenge";
import { Blog } from "./pages/Blog";
import { Profile } from "./pages/Profile";

export const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/challenges" exact component={Challenges} />
          <Route path="/challenges/:id" component={Challenge}/>
          <Route path="/blog/" exact component={Blog}/>
          <Route path="/profile" exact component={Profile}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
