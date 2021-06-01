import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { PostProvider } from "./providers/PostProvider";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import ApplicationView from "./components/ApplicationView";


function App() {
    return (
        <Router>
        <div className="App">
          <UserProfileProvider>
            <PostProvider>
                <ApplicationView />
            </PostProvider>
          </UserProfileProvider>
            </div>
        </Router>
    );
}

export default App;