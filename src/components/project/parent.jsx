import React from 'react';
import './parent.css';

const ParentGuardianSupport = () => {
  return (
    <div className="parent-support-page">
      <header className="parent-support-header">
        <h2>Parent/Guardian Support</h2>
        <p>Your guide to creating a safe and enjoyable gaming environment for your child.</p>
      </header>

      <section className="parent-support-content">
        <div className="support-section">
          <h2>Managing Screen Time</h2>
          <p>
            Establishing healthy gaming habits is important for every child. We offer tools that help parents and guardians 
            limit screen time. You can set daily or weekly limits and view your child's gaming history to monitor usage.
          </p>
          <ul>
            <li>Set time limits on gaming sessions</li>
            <li>Monitor daily and weekly playtime</li>
            <li>Encourage breaks and outdoor activities</li>
          </ul>
        </div>

        <div className="support-section">
          <h2>Setting Up Parental Controls</h2>
          <p>
            With GameVault’s parental controls, you can manage in-game purchases, restrict access to certain content, 
            and control who your child can interact with online.
          </p>
          <ul>
            <li>Block or limit in-game purchases</li>
            <li>Restrict access to mature content</li>
            <li>Manage online communication settings</li>
          </ul>
        </div>

        <div className="support-section">
          <h2>Safe Online Play</h2>
          <p>
            Ensuring your child has a safe online experience is a priority. Our platform includes filters and blocking 
            options to control chat and multiplayer interactions. Learn how to keep your child’s personal data secure 
            and promote respectful behavior in online games.
          </p>
          <ul>
            <li>Enable filters for in-game chat</li>
            <li>Block specific players or interactions</li>
            <li>Report inappropriate behavior</li>
          </ul>
        </div>

        <div className="support-section">
          <h2>Resources for Parents</h2>
          <p>
            Explore external resources that provide tips and guidance on managing screen time, online safety, and 
            fostering a positive gaming experience for your child.
          </p>
          <ul>
            <li><a href="#">Common Sense Media - Parental Reviews</a></li>
            <li><a href="#">Family Online Safety Institute</a></li>
            <li><a href="#">PEGI Ratings and Game Age Restrictions</a></li>
          </ul>
        </div>
      </section>

      <footer className="parent-support-footer">
        <p>Need more help? <a href="/support">Contact our Support Team</a> for personalized assistance.</p>
      </footer>
    </div>
  );
};

export default ParentGuardianSupport;
