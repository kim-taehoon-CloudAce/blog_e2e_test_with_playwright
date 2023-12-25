import { useEffect, useState } from "react";
import Router from "./components/Router";
import { app } from "firebaseApp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "components/Loader";

function App() {
  const auth = getAuth(app);

  // before checking if user is authenticated, loader will be shown
  const [init, setInit] = useState<boolean>(false);

  // check if user is authenticated
  // !!:double negation: null or undefined -> false
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );

  // he recommended way to get the current user is by setting an observer on the Auth object:
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        console.log("signed User:",user);
        setIsAuthenticated(true);
      } else {
        // User is signed out
        console.log("no user, signed out");
        setIsAuthenticated(false);
      }
      setInit(true);
    });
  }, [auth]);
  return (
    <>
      <ToastContainer />
      {init ? <Router isAuthenticated={isAuthenticated} /> : <Loader />}
    </>
  );
}

export default App;
