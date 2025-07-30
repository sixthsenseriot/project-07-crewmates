import { useState } from "react";
import { useRoutes, Link } from "react-router-dom";
import "./App.css";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import ReadPosts from "./pages/ReadPosts";
import CrewmateDetails from "./pages/CrewmateDetails";

const App = () => {
    const routes = useRoutes([
        { path: "/", element: <ReadPosts /> },
        { path: "/create", element: <CreatePost /> },
        { path: "/edit/:id", element: <EditPost /> },
        { path: "/details/:id", element: <CrewmateDetails /> },
    ]);

    return (
        <div className="App">
            <h1>Welcome to the Crewmate Creator</h1>
            <nav>
                <Link to="/">
                    <button>See Crewmates 🔍</button>
                </Link>
                <Link to="/create">
                    <button>Create Crewmate 🎨</button>
                </Link>
            </nav>
            <div>{routes}</div>
        </div>
    );
};

export default App;
