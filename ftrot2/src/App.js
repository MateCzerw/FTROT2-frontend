import { Provider } from "react-redux";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import EngineerBoard from "./components/Roles/Engineer/Board/EngineerBoard";
import Header from "./components/Layout/Header/Header";
import Sidebar from "./components/Layout/Sidebar/Sidebar";
import engineerSidebarActions from "./components/Roles/Engineer/engineerSidebarActions";
import technicalProjectManagerSidebarActions from "./components/Roles/TechnicalProjectManager/technicalProjectManagerSidebarActions";
import TechnicalProjectManagerBoard from "./components/Roles/TechnicalProjectManager/Board/TechnicalProjectManagerBoard";
import Workpackages from "./components/Roles/TechnicalProjectManager/Workpackages/Workpackages";
import EngineerTasks from "./components/Roles/Engineer/Tasks/Tasks";
import LeadEngineerBoard from "./components/Roles/LeadEngineer/Board/LeadEngineerBoard";
import LeadEngineerWorkpackages from "./components/Roles/LeadEngineer/Workpackages/Workpackages";
import leadEngineerSidebarActions from "./components/Roles/LeadEngineer/leadEngineerSidebarActions";
import TeamLeaderBoard from "./components/Roles/TeamLeader/TeamLeaderBoard";
import teamLeaderSidebarActions from "./components/Roles/TeamLeader/teamLeaderSidebarActions";
import AssignTasks from "./components/Roles/TeamLeader/AssignTasks/AssignTasks";
import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import store from "./store";
import Account from "./components/Layout/Account/Account";
import Login from "./components/Layout/Login/Login";
import { theme } from "./theme";
import Register from "./components/Layout/Register/Register";

function App() {
  const [isLogged, setIsLogged] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogOut = () => {
    setIsLogged(!isLogged);
  };

  const handleSidebarOpen = () => {
    setIsSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Provider store={store}>
          <div className="app">
            <Router>
              {isLogged && (
                <Header
                  handleDrawerOpen={handleSidebarOpen}
                  handleLogOut={handleLogOut}
                  isDrawerOpen={isSidebarOpen}
                />
              )}
              <Switch>
                <Route
                  path="/engineer/"
                  render={() => (
                    <Sidebar
                      isSidebarOpen={isSidebarOpen}
                      handleSidebarClose={handleSidebarClose}
                      actions={engineerSidebarActions}
                    ></Sidebar>
                  )}
                ></Route>
                <Route
                  path="/technical-project-manager/"
                  render={() => (
                    <Sidebar
                      isSidebarOpen={isSidebarOpen}
                      handleSidebarClose={handleSidebarClose}
                      actions={technicalProjectManagerSidebarActions}
                    ></Sidebar>
                  )}
                ></Route>
                <Route
                  path="/lead-engineer/"
                  render={() => (
                    <Sidebar
                      isSidebarOpen={isSidebarOpen}
                      handleSidebarClose={handleSidebarClose}
                      actions={leadEngineerSidebarActions}
                    ></Sidebar>
                  )}
                ></Route>
                <Route
                  path="/team-leader/"
                  render={() => (
                    <Sidebar
                      isSidebarOpen={isSidebarOpen}
                      handleSidebarClose={handleSidebarClose}
                      actions={teamLeaderSidebarActions}
                    ></Sidebar>
                  )}
                ></Route>
              </Switch>

              <div className="app__body">
                <Switch>
                  <Route path="/login" exact component={Login}></Route>
                  <Route path="/register" exact component={Register}></Route>
                  <Route
                    path="/"
                    exact
                    component={isLogged && EngineerBoard}
                  ></Route>
                  <Route path="/account" exact component={Account}></Route>
                  <Route
                    path="/engineer/board"
                    exact
                    component={EngineerBoard}
                  ></Route>
                  <Route
                    path="/engineer/tasks"
                    exact
                    component={EngineerTasks}
                  ></Route>
                  <Route
                    path="/technical-project-manager/board"
                    exact
                    component={TechnicalProjectManagerBoard}
                  ></Route>
                  <Route
                    path="/technical-project-manager/workpackages"
                    exact
                    component={Workpackages}
                  ></Route>
                  <Route
                    path="/lead-engineer/board"
                    exact
                    component={LeadEngineerBoard}
                  ></Route>
                  <Route
                    path="/lead-engineer/workpackages"
                    exact
                    component={LeadEngineerWorkpackages}
                  ></Route>
                  <Route
                    path="/team-leader/board"
                    exact
                    component={TeamLeaderBoard}
                  ></Route>
                  <Route
                    path="/team-leader/assign-tasks"
                    exact
                    component={AssignTasks}
                  ></Route>
                </Switch>
              </div>
            </Router>
          </div>
        </Provider>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
