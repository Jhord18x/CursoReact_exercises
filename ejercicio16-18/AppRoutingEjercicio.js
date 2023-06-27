import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Loginpage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import TasksPage from './pages/tasks/TasksPage';
import Notfoundpage from './pages/404/NotFoundPage';
import { useState } from 'react';

function AppRoutingEjercicio() {

  {/* Creo que sería bueno usar useState para manejar el estado de la variable "usuarioLogeado" */}
  const [usuarioLogeado, setUsuarioLogeado] = useState(false);

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Loginpage} />
        <Route exact path="/register" component={RegisterPage} />
        {/* si el usuario esta logeado, rederizamos TasksPage, sino redireccionamos al login */}
        <Route exact path="/tasks" render={() => usuarioLogeado ? <TasksPage/> : <Redirect to="/login" />} />
        <Route component={Notfoundpage}/>{/* si no encuentra las rutas indicadas anteriormente. */}
      </Switch>
    </Router>
  );
}

export default AppRoutingEjercicio;