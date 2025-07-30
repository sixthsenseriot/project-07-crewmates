import { useEffect, useState } from "react";
import { supabase } from "../client";
import { Link } from "react-router-dom";

const ReadPosts = () => {
    const [crewmates, setCrewmates] = useState([]);

    useEffect(() => {
        const fetchCrewmates = async () => {
            let { data, error } = await supabase.from("Crewmates").select("*");
            setCrewmates(data);
        };
        fetchCrewmates();
    }, []);

    return (
        <div className="crewmate-list">
            {crewmates.map((mate) => (
                <div key={mate.id} className="crewmate-card">
                    <h3>{mate.name}</h3>
                    <p>Color: {mate.color}</p>
                    <p>Hat: {mate.hat}</p>
                    <Link to={`/edit/${mate.id}`}>
                        <button>Edit 🛠️</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ReadPosts;
