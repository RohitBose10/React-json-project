import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "../components/layout/header/header";
import Footer from "../components/layout/footer/footer";
import About from "../components/project/about";
import HomePage from "../components/project/Home";
import Community from "../components/project/community";
import SupportPage from "../components/project/support";
import Login from "../components/project/login";
import Create from "../components/project/create";
import Profile from "../components/project/profile";
import Edit from "../components/project/edit";
import CategoryWise from "../components/project/categorywise";
import Games from "../components/project/games";
import AddGame from "../components/project/addgames";
import Details from "../components/project/details";
import Editgame from "../components/project/editgames";
import ParentGuardianSupport from "../components/project/parent";
import AccountsPage from "../components/project/accounts";
import PaymentsPage from "../components/project/payment";
import Purchase from "../components/project/purchase";
import ScrollToTop from "../components/project/scroll";
import PageNotFound from "../components/project/pnf";

const Routing = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="community" element={<Community />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="create" element={<Create />} />
        <Route path="login" element={<Login />} />
        <Route path="login/profile/:id" element={<Profile />} />
        <Route path="login/profile/:id/edit" element={<Edit />} />
        <Route path="category" element={<CategoryWise />} />
        <Route path="games/:categoryName" element={<Games />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="purchase/:id" element={<Purchase />} />
        <Route path="editgame/:id" element={<Editgame />} />
        <Route path="addgame" element={<AddGame />} />
        <Route path="parent" element={<ParentGuardianSupport />} />
        <Route path="account" element={<AccountsPage />} />
        <Route path="payment" element={<PaymentsPage />} />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routing;
