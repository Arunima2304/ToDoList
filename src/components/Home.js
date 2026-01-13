// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom'; // We need this for the button

export const Home = () => {
  // Inline style for the "Glass" effect cards (so we don't need to touch App.css)
  const cardStyle = {
    background: "rgba(255, 255, 255, 0.1)", // Semi-transparent
    backdropFilter: "blur(10px)",            // Blur effect
    borderRadius: "15px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    padding: "20px",
    color: "white",
    height: "100%",
    transition: "transform 0.3s ease",
    cursor: "default"
  };

  return (
    <div className="container text-center mt-5 text-white">
      
      {/* --- HERO SECTION --- */}
      <div className="mb-5">
        <h1 className="display-3 fw-bold mb-3">Master Your Day 🚀</h1>
        <p className="lead mb-4" style={{ opacity: 0.9 }}>
          Stop procrastinating and start achieving. <br />
          The simplest way to organize your life, one task at a time.
        </p>
        
        <Link to="/todo">
          <button className="btn btn-lg btn-primary px-5 py-3 fw-bold" 
            style={{ 
              borderRadius: '50px', 
              background: 'linear-gradient(90deg, #8E2DE2, #4A00E0)',
              border: 'none',
              boxShadow: '0 5px 15px rgba(138, 43, 226, 0.4)'
            }}>
            Get Started Now ✨
          </button>
        </Link>
      </div>

      {/* --- FEATURES GRID --- */}
      <div className="row mt-5">
        
        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div style={cardStyle} className="feature-card">
            <div style={{ fontSize: "3rem", marginBottom: "10px" }}>⚡</div>
            <h3>Lightning Fast</h3>
            <p style={{ opacity: 0.8 }}>
              Add, edit, and delete tasks instantly. No lag, no clutter, just speed.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div style={cardStyle} className="feature-card">
            <div style={{ fontSize: "3rem", marginBottom: "10px" }}>🧠</div>
            <h3>Stay Focused</h3>
            <p style={{ opacity: 0.8 }}>
              Clear your mind by dumping all your tasks here. Don't forget a thing!
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div style={cardStyle} className="feature-card">
            <div style={{ fontSize: "3rem", marginBottom: "10px" }}>💾</div>
            <h3>Auto-Save</h3>
            <p style={{ opacity: 0.8 }}>
              Your tasks are saved automatically. Refresh the page and they are still here.
            </p>
          </div>
        </div>

      </div>

      {/* --- FOOTER QUOTE --- */}
      <div className="mt-5 mb-5 opacity-75">
        <p><i>"The secret of getting ahead is getting started."</i> — Mark Twain ✍️</p>
      </div>

    </div>
  );
};