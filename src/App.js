import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import WorkExperience from "./pages/Work";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";

const routes = [
  { path: "/portfolio", name: "Home", Component: Home },
  { path: "/portfolio/skills", name: "Skills", Component: Skills },
  {
    path: "/portfolio/work",
    name: "Work Experience",
    Component: WorkExperience,
  },
  { path: "/portfolio/projects", name: "Projects", Component: Projects },
  { path: "/portfolio/education", name: "Education", Component: Education },
];

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <div className="page">
              <Component />
            </div>
          </Route>
        ))}
      </div>
    </Router>
  );
}

export default App;
