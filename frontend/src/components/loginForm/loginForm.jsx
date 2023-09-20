import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../redux/slices/api";
import "./loginForm.scss";

export default function Form() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCheckbox = () => {
        setRememberMe(!rememberMe);
    };

    useEffect(() => {
        if (rememberMe) {
            localStorage.setItem('rememberMe', 'true');
            localStorage.setItem('email', email);
        } else {
            localStorage.removeItem('rememberMe');
            localStorage.removeItem('email')
        }
    }, [rememberMe, email]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email.trim() === "" || password.trim() === "") {
            alert("Please fill out all the fields.");
        } else {
            dispatch(userLogin(email, password, navigate));
        }
    }

    return (
        <main className="main bg-dark">
            <section className="login">
                <i className="fa fa-user-circle login__icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="login__form__inputWrapper">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="login__form__inputWrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="login__form__inputRemember">
                        <input type="checkbox" id="remember-me" checked={rememberMe} onChange={handleCheckbox} />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="login__form__button">Sign In</button>
                </form>
            </section>
        </main>
    )
}