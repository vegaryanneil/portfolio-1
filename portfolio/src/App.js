import GlobalStyle from "./Components/GlobalStyle";
import Nav from "./Components/Nav";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import OurWork from "./Pages/OurWork";
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
        <Switch>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/contact" exact>
            <ContactUs />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
