import { Provider, useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
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
import TeamLeaderBoard from "./components/Roles/TeamLeader/Board/TeamLeaderBoard";
import teamLeaderSidebarActions from "./components/Roles/TeamLeader/teamLeaderSidebarActions";
import AssignTasks from "./components/Roles/TeamLeader/AssignTasks/AssignTasks";
import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import Account from "./components/Layout/Account/Account";
import Login from "./components/Layout/Login/Login";
import { theme } from "./theme";
import Register from "./components/Layout/Register/Register";
import { logout } from "./actions/auth";

function App() {
  // const [isLogged, setIsLogged] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.user);
  let history = useHistory();
  const [
    showTechnicalProjectManagerContent,
    setShowTechnicalProjectManagerContent,
  ] = useState(false);
  const [showEngineerContent, setShowEngineerContent] = useState(false);
  const [showTeamLeaderContent, setShowTeamLeaderContent] = useState(false);
  const [showLeadEngineerContent, setShowLeadEngineerContent] = useState(false);

  useEffect(() => {
    if (currentUser) {
      if (
        currentUser.authorities[0].authority ===
        "ROLE_TECHNICAL_PROJECT_MANAGER"
      ) {
        setShowTechnicalProjectManagerContent(true);
        history.push("/technical-project-manager/board");
      } else setShowTechnicalProjectManagerContent(false);

      if (currentUser.authorities[0].authority === "ROLE_LEAD_ENGINEER") {
        setShowLeadEngineerContent(true);
        history.push("/lead-engineer/board");
      } else setShowLeadEngineerContent(false);

      if (currentUser.authorities[0].authority === "ROLE_TEAM_LEADER") {
        setShowTeamLeaderContent(true);
        history.push("/team-leader/board");
      } else setShowTeamLeaderContent(false);

      if (currentUser.authorities[0].authority === "ROLE_ENGINEER") {
        setShowEngineerContent(true);
        history.push("/engineer/board");
      } else setShowEngineerContent(false);
    } else history.push("/login");
  }, [currentUser]);

  const handleLogOut = () => {
    dispatch(logout());
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
        <div className="app">
          {currentUser && (
            <Header
              handleDrawerOpen={handleSidebarOpen}
              handleLogOut={handleLogOut}
              isDrawerOpen={isSidebarOpen}
            />
          )}
          <Switch>
            {showEngineerContent && (
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
            )}
            {showTechnicalProjectManagerContent && (
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
            )}
            {showLeadEngineerContent && (
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
            )}
            {showTeamLeaderContent && (
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
            )}
          </Switch>

          <div className="app__body">
            <Switch>
              <Route path="/login" exact component={Login}></Route>
              <Route path="/register" exact component={Register}></Route>
              {currentUser && (
                <>
                  <Route path="/account" exact component={Account}></Route>
                  {showEngineerContent && (
                    <>
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
                    </>
                  )}
                  {showTechnicalProjectManagerContent && (
                    <>
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
                    </>
                  )}
                  {showLeadEngineerContent && (
                    <>
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
                    </>
                  )}
                  {showTeamLeaderContent && (
                    <>
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
                    </>
                  )}
                </>
              )}
            </Switch>
          </div>
        </div>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
