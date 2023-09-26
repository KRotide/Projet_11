import "./account.scss";

export default function Account({ title, amount, amountDescription }) {
    return (
        <section className="userAccount">
            <div className="userAccount__content">
                <h3 className="userAccount__content__title">{title}</h3>
                <p className="userAccount__content__amount">{amount}</p>
                <p className="userAccount__content__amountDescription">{amountDescription}</p>
            </div>
            <div className="userAccount__content cta">
                <button className="userAccount__content__transactionButton">
                    View transactions
                </button>
            </div>
        </section>
    )
}