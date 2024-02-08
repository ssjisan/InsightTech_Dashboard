import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import BookList from "../Pages/BookList";
import AddBooks from "../Pages/AddBooks";
import Invoice from "../Pages/Invoice";
import { useContext } from "react";
import { DataContext } from "../DataProcessing/DataProcessing";

export default function MainRoute() {
  const { isUserLoggedIn } = useContext(DataContext)
  console.log(isUserLoggedIn);
  return (
    <Routes>
      <Route path="/" element={isUserLoggedIn ? <Dashboard /> : <Login />} />
      <Route path="book_list" element={<BookList />} />
      <Route path="add_book" element={<AddBooks />} />
      <Route path="invoice" element={<Invoice />} />
    </Routes>
  );
}