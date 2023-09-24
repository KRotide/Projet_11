import "./header.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/argentBankLogo.png";
import userIcon from "../../assets/circle-user-solid.svg";
import signOutIcon from "../../assets/right-from-bracket-solid.svg";
import { logout } from "../../redux/slices/userSlice";

export default function Header() {
    const location = useLocation();
    const token = useSelector(state => state.user.token);
    const userName = useSelector(state => state.user.user.userName)

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    if ((location.pathname === "/" || location.pathname === "/login") && !token) {
        return (
            <header>
                <nav className="main__nav">
                    <Link className="main__nav__logo" to="/">
                        <img className="main__nav__logo__image" src={Logo} alt="ArgentBank logo" />
                        <h1 className="sr-only">Argent Bank</h1>
                    </Link>
                    <Link className="main__nav__item" to="/login">
                        <img className="main__nav__item__icon" src={userIcon} alt="user icon" />
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
                        <img className="main__nav__logo__image" src={Logo} alt="ArgentBank logo" />
                        <h1 className="sr-only">Argent Bank</h1>
                    </Link>
                    <div className="main__nav__twoItems">
                        <Link className="main__nav__item" to="/user">
                            <img className="main__nav__item__icon" src={userIcon} alt="user icon" />
                            {userName}
                        </Link>
                        <Link className="main__nav__item" to="/" onClick={handleLogout}>
                            <img className="main__nav__item__icon" src={signOutIcon} alt="sign out icon" />
                            Sign Out
                        </Link>
                    </div>
                </nav>
            </header>
        )
    }
}
