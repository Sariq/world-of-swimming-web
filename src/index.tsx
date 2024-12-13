import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import 'animate.css';
import './styles.css'

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/landing/Landing";
import Profile from "views/Profile";
import Index from "views/Index.js";
import Login from "views/auth/Login";
import Register from "views/auth/Register";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import ProductsList from "views/admin/Products";
import CategoriesList from "views/admin/categories";
import ProductPage from "views/admin/product";
import OrderdsPage from "views/admin/orders";
import ErrorsPage from "views/admin/errors";
import DeliveryArea from "views/admin/delivery-area";
import Cart from "views/cart/cart";
import DeliveryListView from "views/delivery/delivery-list";
import FreeStyleSwimming from "views/swimming-types/free-style-swimming";
import MarathonSwimming from "views/swimming-types/marathon-swimming";
import SeaSwimming from "views/swimming-types/sea-swimming";
import FullScreenVideo1 from "views/tv-ad/video1";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      {/* add routes with layouts */}
      <Route path="/admin" element={<Admin />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/categories" element={<CategoriesList />} />
        <Route path="/admin/categories/:id" element={<ProductsList />} />
        <Route path="/admin/products" element={<ProductsList />} />
        <Route path="/admin/products/:id" element={<ProductsList />} />
        <Route path="/admin/product" element={<ProductPage />} />
        <Route path="/admin/product/add" element={<ProductPage />} />
        <Route path="/admin/product/:id" element={<ProductPage />} />
        <Route path="/admin/errors" element={<ErrorsPage />} />
        <Route path="/admin/orders" element={<OrderdsPage />} />
        <Route path="/admin/maps" element={<Maps />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/admin/tables" element={<Tables />} />
        <Route path="/admin/delivery/area" element={<DeliveryArea />} />
        <Route path="" element={<Navigate to="/admin/dashboard" />} />
      </Route>
      <Route path="auth" element={<Auth />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="" element={<Navigate to="/auth/login" />} />
      </Route>
      {/* add routes without layouts */}
      <Route path="/landing" element={<Landing />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/swimming-types/free-style" element={<FreeStyleSwimming />} />
      <Route path="/swimming-types/marathon" element={<MarathonSwimming />} />
      <Route path="/swimming-types/sea" element={<SeaSwimming />} />
      <Route path="/pizza-gmel/delivery" element={<DeliveryListView />} />
      <Route path="/butcherl/video-1" element={<FullScreenVideo1 />} />
      <Route path="/" element={<Index />} />
    </Routes>
  </BrowserRouter>
);
