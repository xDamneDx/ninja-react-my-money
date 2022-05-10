import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components:
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
