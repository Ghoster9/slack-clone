import React, { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Chat from "./Chat/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login/Login";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1> welcome </h1>
                </Route>
              </Switch>
              {/* react-router chatscren */}
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
