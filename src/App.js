import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// Components:
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
  const { authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
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
      )}
    </div>
  );
}

export default App;
