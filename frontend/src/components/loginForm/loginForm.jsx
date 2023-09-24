import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin, userProfile } from "../../redux/slices/api";
import userIcon from "../../assets/circle-user-solid.svg";
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
            try {
                const token = await dispatch(userLogin(email, password, navigate));
                if (token) {
                    dispatch(userProfile(token));
                }
            } catch (error) {
                console.error('Error during login:', error)
            }
        }
    }

    return (
        <main className="main bg-dark">
            <section className="login">
                <img className="login__icon" src={userIcon} alt="user icon" />
                <h1>Sign In</h1>
                <form>
                    <div className="login__form__inputWrapper">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            autoComplete={rememberMe ? "true" : "false"}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="login__form__inputWrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            autoComplete={rememberMe ? "true" : "false"}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="login__form__inputRemember">
                        <input type="checkbox" id="remember-me" checked={rememberMe} onChange={handleCheckbox} />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="login__form__button" onClick={handleSubmit}>Sign In</button>
                </form>
            </section>
        </main>
    )
}