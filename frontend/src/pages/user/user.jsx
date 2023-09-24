import "./user.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import EditUserName from "../../components/editUserName/editUserName";

export default function User() {
    const firstName = useSelector(state => state.user.user.firstName);
    const lastName = useSelector(state => state.user.user.lastName);

    const [toggleEditUserName, setToggleEditUserName] = useState(false);

    const handeEditUserName = () => {
        setToggleEditUserName(!toggleEditUserName)
    };

    return (
        <>
            <main className="main bg-dark">
                {toggleEditUserName ? (
                    < EditUserName setToggleEditUserName={setToggleEditUserName} />
                ) : (
                    <div className="user">
                        <h1 className="user__title">Welcome back<br />{firstName}  {lastName} !</h1>
                        <button className="user__editButton" onClick={handeEditUserName}>Edit Name</button>
                    </div>
                )}
                <h2 className="sr-only">Accounts</h2>
                <section className="userAccount">
                    <div className="userAccount__content">
                        <h3 className="userAccount__content__title">Argent Bank Checking (x8349)</h3>
                        <p className="userAccount__content__amount">$2,082.79</p>
                        <p className="userAccount__content__amountDescription">Available Balance</p>
                    </div>
                    <div className="userAccount__content cta">
                        <button className="userAccount__content__transactionButton">
                            View transactions
                        </button>
                    </div>
                </section>
                <section className="userAccount">
                    <div className="userAccount__content">
                        <h3 className="userAccount__content__title">Argent Bank Savings (x6712)</h3>
                        <p className="userAccount__content__amount">$10,928.42</p>
                        <p className="userAccount__content__amountDescription">Available Balance</p>
                    </div>
                    <div className="userAccount__content cta">
                        <button className="userAccount__content__transactionButton">
                            View transactions
                        </button>
                    </div>
                </section>
                <section className="userAccount">
                    <div className="userAccount__content">
                        <h3 className="userAccount__content__title">Argent Bank Credit Card (x8349)</h3>
                        <p className="userAccount__content__amount">$184.30</p>
                        <p className="userAccount__content__amountDescription">Current Balance</p>
                    </div>
                    <div className="userAccount__content cta">
                        <button className="userAccount__content__transactionButton">
                            View transactions
                        </button>
                    </div>
                </section>
            </main>
        </>
    )
}