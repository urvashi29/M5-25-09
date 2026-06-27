import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import { auth } from "./firebase";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {user ? (
        <p>
          Welcome! {user.displayName}
          <button onClick={() => auth.signOut()}>Signout</button>
        </p>
      ) : (
        <Login />
      )}
    </>
  );
};

export default App;
