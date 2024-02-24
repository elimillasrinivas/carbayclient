import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";
import Blogs from "./components/Blogs/blogs";
import Insurance from "./components/Insurance/insurance";

import Login from "./pages/login/login";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ServicesForm from "./pages/services-data/ServicesForm";
import Signup from "./pages/signup/signup";
import Services from "./components/Services/services";
import Blogpreview from "./components/Blogs/blogpreview";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogview" element={<Blogpreview />} />
          <Route path="/services" element={<Services />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/data-entry" element={<ServicesForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
