import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUserName } from "../../redux/slices/api";
import "./editUserName.scss";

export default function EditUserName(props) {
    const [editUserName, setEditUserName] = useState("");

    const dispatch = useDispatch();

    const userName = useSelector(state => state.user.user.userName);
    const firstName = useSelector(state => state.user.user.firstName);
    const lastName = useSelector(state => state.user.user.lastName);
    const token = useSelector(state => state.user.token);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (userName === "") {
            alert("Please fill out all the fields.");
        } else {
            dispatch(changeUserName(token, editUserName));
        }
    }

    return (
        <div className="editUserName">
            <h1 className="editUserName__title">Edit user info</h1>
            <form className="editUserName__form">
                <div className="editUserName__form__inputWrapper">
                    <label htmlFor="userName">User name:</label>
                    <input
                        type="text"
                        id="userName"
                        value={editUserName}
                        autoComplete="true"
                        onChange={(e) => setEditUserName(e.target.value)}
                    />
                </div>
                <div className="editUserName__form__inputWrapper">
                    <label htmlFor="firstName">First name:</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        autoComplete="true"
                        readOnly
                        className="editUserName__form__inputWrapper--readOnly"
                    />
                </div>
                <div className="editUserName__form__inputWrapper">
                    <label htmlFor="lastName">Last name:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        autoComplete="true"
                        readOnly
                        className="editUserName__form__inputWrapper--readOnly"
                    />
                </div>
                <div className="editUserName__form__button">
                    <button
                        type="submit"
                        className="editUserName__form__button__content"
                        onClick={handleSubmit}
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        className="editUserName__form__button__content"
                        onClick={() => props.setToggleEditUserName(false)}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}