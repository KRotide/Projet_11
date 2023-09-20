import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import User from "./pages/user/user";

function Router() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default Router;
