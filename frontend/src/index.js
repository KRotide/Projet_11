import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import Header from './components/header/header';
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import User from "./pages/user/user";
import Footer from './components/footer/footer';
import "./main.scss";

const PrivateRoute = () => {
    const token = useSelector(state => state.user.token);
    if (token) {
        return <User />;
    } else {
        return <Navigate to='/login' />;
    };
};

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/user" element={<PrivateRoute />} />
                </Routes>
                <Footer />
            </Provider>
        </BrowserRouter>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<React.StrictMode><App /></React.StrictMode>);