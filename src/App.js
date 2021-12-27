// import "./App.css";
import Nav from "./components/Nav/Nav";
import { Challenges } from "./pages/Challenges";
import { Homepage } from "./pages/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Challenge } from "./pages/Challenge";
import { Blog } from "./pages/Blog";
import { Profile } from "./pages/Profile";
import { ProtectedRoute } from "./services/Authentication";
import { Footer } from './components/Footer/Footer';
import { Contact } from "./components/Contact/Contact";

export const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <ProtectedRoute path="/challenges" exact component={Challenges} />
          <ProtectedRoute path="/challenges/:id" component={Challenge}/>
          <ProtectedRoute path="/blog/" exact component={Blog}/>
          <ProtectedRoute path="/profile" exact component={Profile}/>
          <Route path="/contact" exact component={Contact}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
