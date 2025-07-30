import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../client";
import "./CreatePost.css"; // reuse same styling

const CrewmateDetails = () => {
    const { id } = useParams();
    const [crewmate, setCrewmate] = useState(null);

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

    if (!crewmate) return <div>Loading...</div>;

    const bodyImage = `/assets/bodies/${crewmate.color}.png`;
    const hatImage = `/assets/hats/${crewmate.hat}.png`;

    const capitalize = (str) =>
        str ? str.charAt(0).toUpperCase() + str.slice(1) : "";

    return (
        <div className="create-container">
            <div className="create-form">
                <h2>Crewmate Details</h2>

                <p>
                    <strong>Name:</strong> {crewmate.name}
                </p>
                <p>
                    <strong>Color:</strong> {capitalize(crewmate.color)}
                </p>
                <p>
                    <strong>Hat:</strong> {capitalize(crewmate.hat)}
                </p>

                <div className="detail-container">
                    <p>
                        <strong>Likes:</strong> {crewmate.likes}
                    </p>
                    <p style={{ marginLeft: "20px" }}>
                        <strong>Dislikes:</strong> {crewmate.dislikes}
                    </p>
                </div>

                <Link to={`/edit/${crewmate.id}`}>
                    <button>Edit 🛠️</button>
                </Link>
            </div>

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

export default CrewmateDetails;
