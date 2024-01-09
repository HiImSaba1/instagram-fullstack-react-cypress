import "./wdyr";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import "./styles/app.css";
import useAuthListener from "./hooks/use-auth-listener";
import UserContext from "./context/user";
import ProtectedRoute from "./helpers/protectedRoute";
import IsUserLoggedIn from "./helpers/isUserLoggedIn";

const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/sign-up"));
const Profile = lazy(() => import("./pages/profile"));
const NotFound = lazy(() => import("./pages/not-found"));
const Dashboard = lazy(() => import("./pages/dashboard"));

function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading..</p>}>
          <Routes>
            <Route
              path={ROUTES.DASHBOARD}
              exact
              element={
                <ProtectedRoute user={user}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path={ROUTES.LOGIN}
              exact
              element={
                <IsUserLoggedIn isLoggedInPath={ROUTES.DASHBOARD} user={user}>
                  <Login />
                </IsUserLoggedIn>
              }
            />

            <Route
              path={ROUTES.SIGN_UP}
              exact
              element={
                <IsUserLoggedIn isLoggedInPath={ROUTES.DASHBOARD} user={user}>
                  <Signup />
                </IsUserLoggedIn>
              }
            />
            <Route path={ROUTES.PROFILE} exact element={<Profile />} />
            <Route path="/*" Component={NotFound} />
          </Routes>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
