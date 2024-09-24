import React from "react";
import "./payment.css";

const PaymentsPage = () => {
  return (
    <div className="payments-page">
      <header className="payments-header">
        <h2>Payments and Purchases</h2>
        <p>
          Manage your in-game purchases, review your transaction history, and get help with refunds and payment methods.
        </p>
      </header>

      <section className="payments-section">
        <div className="payment-option">
          <h2>Managing Payment Methods</h2>
          <p>
            Add or remove credit cards, link PayPal, and set up gift cards.
          </p>
          <p className="emphasis">Tip: Make sure your payment method is up-to-date to avoid any interruptions.</p>
        </div>

        <div className="payment-option">
          <h2>Transaction History</h2>
          <p>
            Review past purchases, see transaction details, and track your spending in GameVault.
          </p>
          <p className="emphasis">Note: You can filter transactions by date and amount to find specific purchases.</p>
        </div>

        <div className="payment-option">
          <h2>Refunds and Disputes</h2>
          <p>
            Need help with a purchase? Learn how to request refunds or dispute transactions with GameVault support.
          </p>
          <p className="emphasis">Remember: Refund requests must be submitted within 30 days of the transaction.</p>
        </div>

        <div className="payment-option">
          <h2>Setting Up Recurring Payments</h2>
          <p>
            For regular in-game purchases, consider setting up recurring payments to automate your transactions.
            You can manage these in your account settings and adjust the frequency as needed.
          </p>
        </div>

        <div className="payment-option">
          <h2>Security and Privacy</h2>
          <p>
            Your payment information is protected with industry-standard encryption.
            Always monitor your account for unauthorized transactions and report any suspicious activity to our support team.
          </p>
        </div>

        <div className="payment-option">
          <h2>Gift Cards and Vouchers</h2>
          <p>
            Redeem gift cards and vouchers in GameVault for in-game currency.
          </p>
          <p className="emphasis">Tip: Check the expiration date of your gift cards and make sure they’re linked to your account.</p>
        </div>
      </section>
    </div>
  );
};

export default PaymentsPage;
