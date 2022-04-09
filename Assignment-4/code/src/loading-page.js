import React from 'react';
import { Link } from 'react-router-dom';
import './loading-page.css';

export default function LandingPage() {
  return (
    <div>
      <div className="image">
        <img src='/images/loading.jpg' alt="" />
      </div>
      <div className="title">
        <div className="txtLand">
          <p>10x Team 04</p>
        </div>
        <div className="btn">
          <Link id="landBtn" className="lBtn" to="/Postview">
            Enter
          </Link>
        </div>
      </div>
    </div>
  );
}