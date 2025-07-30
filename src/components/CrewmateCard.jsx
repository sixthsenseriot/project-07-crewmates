import React from "react";
import { Link } from "react-router-dom";
import "./CrewmateCard.css";

const CrewmateCard = ({ mate }) => {
    const bodyImage = `/assets/bodies/${mate.color}.png`;
    const hatImage = `/assets/hats/${mate.hat}.png`;

    return (
        <div className="crewmate-card">
            <div className="crewmate-image-container">
                <img
                    src={bodyImage}
                    alt={`${mate.color} crewmate`}
                    className="body"
                />
                <img
                    src={hatImage}
                    alt={`${mate.hat} hat`}
                    className={`hat ${mate.hat}`}
                />
            </div>
            <div className="crewmate-info">
                <h3>{mate.name}</h3>
                <p>
                    <strong>Color:</strong> {mate.color}
                </p>
                <p>
                    <strong>Hat:</strong> {mate.hat}
                </p>
                <Link to={`/edit/${mate.id}`}>
                    <button>Edit 🛠️</button>
                </Link>
            </div>
        </div>
    );
};

export default CrewmateCard;
