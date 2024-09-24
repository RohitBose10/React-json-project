import React from "react";
import { useNavigate } from "react-router-dom";
import "./accounts.css";

const AccountsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="accounts-page">
      <header className="accounts-header">
        <h2>Welcome to GameVault Accounts</h2>
        <p>
          Your GameVault account gives you the best gaming experience across all your devices. Whether you're new here or a returning player, manage your account to get the most out of your gaming journey.
        </p>
      </header>

      <div className="account-content">
        <div className="account-section">
          <h2>Create a New Account</h2>
          <p>
            Join millions of gamers worldwide and take your gaming to the next level. By creating a GameVault account, you unlock:
          </p>
          <ul>
            <li>Seamless synchronization of game progress across devices</li>
            <li>Access to exclusive in-game content, events, and rewards</li>
            <li>Personalized game recommendations and updates</li>
            <li>Join leaderboards and participate in competitive tournaments</li>
          </ul>
          <p>
            Ready to start your adventure? Click below to create a new account and explore the endless possibilities!
          </p>
          <button onClick={() => navigate("/create")} className="create-account-btn">
            Create Account
          </button>
        </div>

        <div className="account-section">
          <h2>Sign In to Your Account</h2>
          <p>
            Already a GameVault member? Welcome back! Sign in to continue your gaming experience where you left off and enjoy:
          </p>
          <ul>
            <li>Saved progress and achievements on all your devices</li>
            <li>Access to all your in-game purchases, rewards, and unlocks</li>
            <li>Stay up to date with the latest news, updates, and exclusive offers</li>
            <li>Join your friends in multiplayer games and stay connected with the community</li>
          </ul>
          <p>
            Don’t miss out on the action—log in now to jump back into the game!
          </p>
          <button onClick={() => navigate("/login")} className="sign-in-btn">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountsPage;
