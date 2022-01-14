import React, { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import { Challenges } from "./pages/Challenges";
import { Homepage } from "./pages/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Challenge } from "./pages/Challenge";
import { Blog } from "./pages/Blog";
import { Post } from "./pages/Post";
import { Profile } from "./pages/Profile";
import { ProtectedRoute } from "./services/Authentication";
import { Footer } from "./components/Footer/Footer";
import { About } from "./pages/About";
import { notFound } from "./pages/404";
import CodingChallengeDataService from "./services/codingChallenges";
import BlogDataService from "./services/blogs";
import { Contact } from "./pages/Contact";

export const App = () => {
  const [challenges, setChallenges] = useState([]);
  const [challengeTypes, setChallengeTypes] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    retrieveCodingChallenges();
    retrieveBlogs();
  }, []);

  const retrieveBlogs = () => {
    BlogDataService.getAll().then((response) => {
      setBlogs(response.data.blogs);
    });
  };

  const retrieveCodingChallenges = () => {
    CodingChallengeDataService.getAll().then((response) => {
      setChallenges(response.data.coding_challenges);
      setChallengeTypes([
        ...new Set(
          response.data.coding_challenges.map(
            (challenge) => challenge.challenge_type
          )
        ),
      ]);
    });
  };

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" exact component={About} />
          <Route path="/challenges" exact>
            <Challenges
              allChallenges={challenges}
              challengeTypes={challengeTypes}
            />
          </Route>
          <Route path="/challenges/:id" component={Challenge} />
          <Route path="/blog/" exact>
            <Blog blogs={blogs} />
          </Route>
          <Route path="/blog/:id" exact component={Post} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/contact" exact component={Contact} />
          <Route path="*" component={notFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
