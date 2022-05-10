import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components:
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route>
            <Signup path="/signup" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
