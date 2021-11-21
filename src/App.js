import { Route, Switch, BrowserRouter } from 'react-router-dom'
import "./Sass/style.scss"
import Modal from './layouts/Modal'
import ForgotPassword from'./components/ForgotPassword'
import CreateNewpassword from "./components/CreateNewpassword";
import PasswordChanged from "./components/PasswordChanged";
import Login from "./components/Login";
import Upload from './components/Upload';
import ChoosePlan from './components/ChoosePlan';
function App() {
  return (
    <div className="App">
      <ChoosePlan />
    </div>
  );
}

export default App;
