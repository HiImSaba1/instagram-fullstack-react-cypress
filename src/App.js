import './wdyr';
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import "./styles/app.css";
import useAuthListener from "./hooks/use-auth-listener";
import UserContext from "./context/user";

const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/sign-up"));
const NotFound = lazy(() => import("./pages/not-found"));
const Dashboard = lazy(() => import("./pages/dashboard"));

function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading..</p>}>
          <Routes>
            <Route path={ROUTES.DASHBOARD} Component={Dashboard} />
            <Route path={ROUTES.LOGIN} Component={Login} />
            <Route path={ROUTES.SIGN_UP} Component={Signup} />
            <Route path="/*" Component={NotFound} />
          </Routes>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
