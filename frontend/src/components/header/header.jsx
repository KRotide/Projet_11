import "./header.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/argentBankLogo.png";
import { useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();
    if (location.pathname === "/" || location.pathname === "/login") {
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
    } else if (location.pathname === "/user")
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
                            Tony
                        </Link>
                        <Link className="main__nav__item" to="/">
                            <i className="fa fa-sign-out main__nav__item__icon"></i>
                            Sign Out
                        </Link>
                    </div>
                </nav>
            </header>
        )
}
