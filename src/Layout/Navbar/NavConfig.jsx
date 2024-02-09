import { BookList, Dashboard } from "../../Assets/Icons";


const navConfig = [
  {
    id: 1,
    title: "Dashboard",
    link: "/",
    icon: <Dashboard />,
  },
  {
    id: 2,
    title: "Book List",
    link: "/book_list",
    icon: <BookList />,
  }
];

export { navConfig };