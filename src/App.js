import React from 'react';
// import Home from './Home';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import About from './About';
// import Contact from './Contact';
import UseMemoExample from './Components/Usememo';
import UseRefExample  from './Components/Useref';
import Usecallback from './Components/Usecallback';
import ImageButtons from "./Components/demo"
import Useble from './Components/Tic_toe';
import CrudApp from "./Components/Craud"
function App() {
  return (
    
 <div className="App">
        {/* <Router>
             <Switch>
              <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
         
          <Route path="/">
            <Home />
          </Route>
        </Switch>
          </Router>  */}
          {/* <UseMemoExample />
          <UseRefExample />
          <Usecallback />
          <ImageButtons /> */}
          <Useble />
          {/* <CrudApp /> */}
          
    </div>
  );
}

export default App;
