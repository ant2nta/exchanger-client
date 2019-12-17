import React from "react";
import "./App.scss";
import Footer from "./components/Footer/index";
import Header from "./components/Header/index";
import Home from "./components/Home/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import News from "./components/News/index";
import Analytycs from "./components/Analytycs/index";
import Auth from "./components/Auth/index";
import Register from "./components/Register/index";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className="width">
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/news" component={News} />
            <Route exact path="/analytycs" component={Analytycs} />
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/register" component={Register} />
          </div>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
