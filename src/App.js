import { Route, Switch } from 'react-router-dom'
import "./Sass/style.scss"
import Modal from './layouts/Modal'
import ForgotPassword from'./components/ForgotPassword'
import CreateNewpassword from "./components/CreateNewpassword";
import PasswordChanged from "./components/PasswordChanged";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
