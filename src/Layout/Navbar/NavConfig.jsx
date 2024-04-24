import { Calendar, Dashboard, ProjectRequest } from "../../Assets/Icons";

const navConfig = [
  {
    id: 1,
    title: "Dashboard",
    link: "/",
    icon: <Dashboard />,
  },
  {
    id: 2,
    title: "Project Request",
    link: "/project_request",
    icon: <ProjectRequest />,
  },
  {
    id: 3,
    title: "Schedule",
    link: "/schedule",
    icon: <Calendar />,
  },
];

export { navConfig };
