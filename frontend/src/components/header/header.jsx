import "./header.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/argentBankLogo.png";
import { logout } from "../../redux/slices/userSlice";

export default function Header() {
    const location = useLocation();
    const token = useSelector(state => state.user.token);
    const firstName = useSelector(state => state.user.firstName);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    if ((location.pathname === "/" || location.pathname === "/login") && !token) {
        return (
            <header>
                <nav className="main__nav">
                    <Link className="main__nav__logo" to="/">
                        <img className="main__nav__logo__image" src={Logo} alt="Logo ArgentBank" />
                        <h1 className="sr-only">Argent Bank</h1>
                    </Link>
                    <Link className="main__nav__item" to="/login">
                        <i className="fa fa-user-circle main__nav__item__icon"></i>
                        Sign In
                    </Link>
                </nav>
            </header>
        )
    } else if ((location.pathname === "/" || location.pathname === "/user") && token) {
        return (
            <header>
                <nav className="main__nav">
                    <Link className="main__nav__logo" to="/">
                        <img className="main__nav__logo__image" src={Logo} alt="Logo ArgentBank" />
                        <h1 className="sr-only">Argent Bank</h1>
                    </Link>
                    <div>
                        <Link className="main__nav__item" to="/user">
                            <i className="fa fa-user-circle main__nav__item__icon"></i>
                            {firstName}
                        </Link>
                        <Link className="main__nav__item" to="/" onClick={handleLogout}>
                            <i className="fa fa-sign-out main__nav__item__icon"></i>
                            Sign Out
                        </Link>
                    </div>
                </nav>
            </header>
        )
    }
}
