//import logo from './logo.svg';
import Header from "./Header";
import Footer from "./Footer";
import Slider from "./Slider";
import Login from "./Login"
import SliderData from "./SliderData"; 
import Data from "./Data"; 
import Signup from "./Signup";
import Products from "./Products";
import { Switch,Route  } from "react-router-dom";
import './App.css';
import Cart from "./Cart"

function App() {
  return (
    <div className="App">
    <Header/>
    <Switch>
    <Route exact path="/">
    <Slider slide={SliderData}/>
    </Route>
    </Switch>
    <Switch>
    <Route exact path="/login" component={Login}>
    </Route>
    </Switch>
    <Switch>
    <Route exact path="/signup" component={Signup}>
    </Route>
    </Switch>
    <Switch>
    <Route exact path="/products" component={Products}>
    </Route>
    </Switch>
    <Switch>
    <Route exact path="/cart">
    <Cart slides={Data}/>
    </Route>
    </Switch>
   <Footer/>
    </div>
  );
}

export default App;
