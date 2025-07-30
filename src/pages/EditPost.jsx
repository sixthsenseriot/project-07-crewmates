import { useEffect, useState } from "react";
import { supabase } from "../client";
import { useParams, useNavigate } from "react-router-dom";
import "./CreatePost.css"; // reuse same styles

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

const EditPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [crewmate, setCrewmate] = useState({ name: "", color: "", hat: "" });

    useEffect(() => {
        const fetchCrewmate = async () => {
            const { data } = await supabase
                .from("Crewmates")
                .select("*")
                .eq("id", id)
                .single();
            setCrewmate(data);
        };
        fetchCrewmate();
    }, [id]);

    const handleChange = (e) => {
        setCrewmate({ ...crewmate, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        await supabase.from("Crewmates").update(crewmate).eq("id", id);
        navigate("/");
    };

    const handleDelete = async () => {
        await supabase.from("Crewmates").delete().eq("id", id);
        navigate("/");
    };

    const bodyImage = crewmate.color
        ? `/assets/bodies/${crewmate.color}.png`
        : null;
    const hatImage = crewmate.hat ? `/assets/hats/${crewmate.hat}.png` : null;

    return (
        <div className="create-container">
            <form className="create-form" onSubmit={handleUpdate}>
                <h2>Edit Crewmate</h2>

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

                <div className="detail-container">
                    <div>
                        <label className="likes-label">Likes:</label>
                        <input
                            name="likes"
                            value={crewmate.likes}
                            onChange={handleChange}
                            placeholder="Crewmate Likes"
                            required
                        />
                    </div>
                    <div>
                        <label className="dislikes-label">Dislikes:</label>
                        <input
                            name="dislikes"
                            value={crewmate.dislikes}
                            onChange={handleChange}
                            placeholder="Crewmate Dislikes"
                            required
                        />
                    </div>
                </div>

                <button type="submit">Update Crewmate ✅</button>
                <button
                    type="button"
                    onClick={handleDelete}
                    style={{
                        backgroundColor: "#dc3545",
                        color: "white",
                        marginTop: "1rem",
                    }}
                >
                    Delete Crewmate 🗑️
                </button>
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

export default EditPost;
