import React from 'react';
import './Card.css';

export default function Card({ people }) {
  console.log(people);
  return people.map((person) => {
    return (
      <div className="card">
        <div className="info">
          <div className="name">
            {person.name}
            <br />
            {person.location}
          </div>
          <div className="dots">
          <img src="/images/three-dots.jpg" alt="" />
          </div>
        </div>

        <div className="image">
          <img src={person.PostImage} alt="Not Found" />
        </div>

        <div className="details">
          <div className="like">
            <img src="https://cdn-icons-png.flaticon.com/128/833/833300.png" alt="" />
          </div>
          <div className="share">
            <img src="https://cdn-icons-png.flaticon.com/128/2526/2526496.png" alt="" />
          </div>
          <div className="date">{person.date}</div>
        </div>

        <div className="likeCounts">
          <p>{person.likes} likes</p>
        </div>

        <div className="description">
          <p>{person.description}</p>
        </div>
      </div>
    );
  });
}