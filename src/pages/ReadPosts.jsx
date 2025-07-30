import { useEffect, useState } from "react";
import { supabase } from "../client";
import { Link } from "react-router-dom";
import CrewmateCard from "../components/CrewmateCard";
import "./ReadPosts.css";

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
                <CrewmateCard key={mate.id} mate={mate} />
            ))}
        </div>
    );
};

export default ReadPosts;
