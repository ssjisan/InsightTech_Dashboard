import { AddBook, BookList, Dashboard, Invoice } from "../../Assets/Icons";


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
  },
  {
    id: 3,
    title: "Add Book",
    link: "/add_book",
    icon: <AddBook />,
  },
  {
    id: 4,
    title: "Invoice Log",
    link: "/invoice",
    icon: <Invoice />,
  }
];

export { navConfig };