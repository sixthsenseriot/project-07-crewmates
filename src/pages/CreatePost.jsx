import { useState } from "react";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";
import "./CreatePost.css";

const colors = [
    "red",
    "blue",
    "green",
    "lime",
    "orange",
    "yellow",
    "white",
    "purple",
    "pink",
    "cyan",
    "brown",
    "black",
];
const hats = [
    "beanie",
    "abominal",
    "alien",
    "bean",
    "bone",
    "butter",
    "cat",
    "cheese",
    "crown",
    "duck",
    "flower",
    "money",
    "party",
    "pirate",
    "scuba",
];

const CreatePost = () => {
    const [crewmate, setCrewmate] = useState({
        name: "",
        color: "",
        hat: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCrewmate({ ...crewmate, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await supabase.from("Crewmates").insert([crewmate]);
        navigate("/");
    };

    const bodyImage = crewmate.color
        ? `/assets/bodies/${crewmate.color}.png`
        : null;
    const hatImage = crewmate.hat ? `/assets/hats/${crewmate.hat}.png` : null;

    return (
        <div className="create-container">
            <form className="create-form" onSubmit={handleSubmit}>
                <h2>Create a Crewmate</h2>

                <label>Name:</label>
                <input
                    name="name"
                    value={crewmate.name}
                    onChange={handleChange}
                    placeholder="Crewmate Name"
                    required
                />

                <label>Color:</label>
                <select
                    name="color"
                    value={crewmate.color}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select a color</option>
                    {colors.map((color) => (
                        <option key={color} value={color}>
                            {color.charAt(0).toUpperCase() + color.slice(1)}
                        </option>
                    ))}
                </select>

                <label>Hat:</label>
                <select
                    name="hat"
                    value={crewmate.hat}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select a hat</option>
                    {hats.map((hat) => (
                        <option key={hat} value={hat}>
                            {hat.charAt(0).toUpperCase() + hat.slice(1)}
                        </option>
                    ))}
                </select>

                <button type="submit">Create Crewmate 🚀</button>
            </form>

            <div className="preview">
                <h3>Preview</h3>
                <div className="crewmate-preview">
                    {bodyImage && (
                        <img
                            src={bodyImage}
                            alt="Crewmate body"
                            className="body"
                        />
                    )}
                    {hatImage && (
                        <img
                            src={hatImage}
                            alt="Crewmate hat"
                            className={`hat ${crewmate.hat || "default"}`}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
