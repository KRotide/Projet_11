import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from './components/header/header';
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import User from "./pages/user/user";
import Footer from './components/footer/footer';
import "./main.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/user" element={<User />} />
                </Routes>
                <Footer />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
