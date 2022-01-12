import { Route, Switch, useLocation } from "react-router";
import Sidebar from "./components/Sidebar/index";
import Home from "./components/Pages/Home";
import Team from "./components/Pages/Team";
import Calender from "./components/Pages/Calender";
import Documents from "./components/Pages/Documents";
import Projects from "./components/Pages/Projects";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import Music from "./components/Pages/Music";
import People from "./components/Pages/People";
import Search from "./components/Pages/Search";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function App() {
  const location = useLocation();
  return (
    <>
      {/* <Sidebar /> */}
      <Pages>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/search" component={Search}/>
            <Route exact path="/" component={Home} />
            <Route path="/team" component={Team} />
            <Route path="/Music" component={Music} />
            <Route path="/People" component={People} />
            <Route path="/calender" component={Calender} />
            <Route path="/documents" component={Documents} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </AnimatePresence>
      </Pages>
    </>
  );
}

export default App;
