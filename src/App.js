import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import WorkExperience from "./pages/Work";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/skills", name: "Skills", Component: Skills },
  { path: "/work", name: "Work Experience", Component: WorkExperience },
  { path: "/projects", name: "Projects", Component: Projects },
  { path: "/education", name: "Education", Component: Education },
];

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <div className="container">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </div>
      </>
    </Router>
  );
}

export default App;
