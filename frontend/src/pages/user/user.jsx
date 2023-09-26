import "./user.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import EditUserName from "../../components/editUserName/editUserName";
import Account from "../../components/account/account";

export default function User() {
    const accountData = [
        {
            title: "Argent Bank Checking (x8349)",
            amount: "$2,082.79",
            amountDescription: "Available Balance",
        },
        {
            title: "Argent Bank Savings (x6712)",
            amount: "$10,928.42",
            amountDescription: "Available Balance",
        },
        {
            title: "Argent Bank Credit Card (x8349)",
            amount: "$184.30",
            amountDescription: "Current Balance",
        },
    ]

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
                {accountData.map(({ title, amount, amountDescription }) => (
                    <Account
                        key={title}
                        title={title}
                        amount={amount}
                        amountDescription={amountDescription}
                    />
                ))}
            </main>
        </>
    )
}