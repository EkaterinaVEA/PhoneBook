import { lazy, Suspense, useEffect } from "react";
import { Switch } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import { useDispatch} from "react-redux";
import { authOperations,} from "./redux/auth";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { Loader } from "./components/Loader/Loader";

const HomePage = lazy(() =>
  import("./pages/HomePage/HomePage")
);

const ContactsPage = lazy(() =>
  import(
    "./pages/ContactsPage/ContactsPage"
  )
);

const RegisterPage = lazy(() =>
  import(
    "./pages/RegisterPage/RegisterPage"
  )
);

const LoginPage = lazy(() =>
  import("./pages/LoginPage/LoginPage")
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
          <Suspense fallback={<Loader />}>
            <Switch>
              <PublicRoute exact path={"/"}                
              restricted
              redirectTo="/contacts"
              >
                <HomePage />
              </PublicRoute>

              <PublicRoute path={"/register"}
              restricted
              redirectTo="/contacts"
              >
                <RegisterPage />
              </PublicRoute>

              <PublicRoute path={"/login"}
              restricted
              redirectTo="/contacts"
              >
                <LoginPage />
              </PublicRoute>

              <PrivateRoute path={"/contacts"} redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>          
            </Switch>
          </Suspense>
    </>
  );
};

export default App;