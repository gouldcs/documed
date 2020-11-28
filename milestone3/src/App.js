import "./App.css"
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainLayout from "./pages/main-layout/MainLayout";
import SignUp from "./pages/sign-up/SignUp";
import Logout from "./pages/logout/Logout";
import Login from "./pages/login/Login";

function App() {
  return (
    <Router>
        <Route path="/home" component={MainLayout} />
        <Route path="/" exact component={SignUp} />
        <Route path="/Logout" component={Logout} />
        <Route path="/login" component={Login} />
    </Router>
  )
}

export default App
