import Chat from "../pages/Chat/Chat.svelte";

// FileManager
import FileManager from "../pages/FileManager/index.svelte";

// Pages Calendar
import Calendar from "../pages/Calendar/index.svelte";

//Tasks
import TasksList from "../pages/Tasks/tasks-list.svelte";
import TasksCreate from "../pages/Tasks/tasks-create.svelte";

// Agents
import AgentsGrid from "../pages/Agents/agents-grid.svelte";
import AgentOverview from "../pages/Agents/AgentOverview/agent-overview.svelte";
import AgentCreate from "../pages/Agents/agent-create.svelte";

// Authentication related pages
import Login from "../pages/Authentication/Login.svelte";
import Register from "../pages/Authentication/Register.svelte";

// Dashboard
import Dashboard from "../pages/Dashboard/index.svelte";

// https://www.npmjs.com/package/svelte-routing
const authProtectedRoutes = [
  { path: "/", component: Dashboard },     
  { path: "/index", component: Dashboard },
  { path: "/dashboard", component: Dashboard },

  //chat
  { path: "/chat", component: Chat },

  //File Manager
  { path: "/apps-filemanager", component: FileManager },

  //calendar
  { path: "/calendar", component: Calendar },

  // Tasks
  { path: "/tasks-list", component: TasksList },
  { path: "/tasks-create", component: TasksCreate },

  // Agents
  { path: "/agents-grid", component: AgentsGrid },
  { path: "/agent-overview/:id", component: AgentOverview },
  { path: "/agent-create", component: AgentCreate },
];

const publicRoutes = [
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];

const MOCK_DATA = {
  authProtectedRoutes,
  publicRoutes,
};

export default MOCK_DATA;