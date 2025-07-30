import { useEffect, useState } from "react";
import { supabase } from "../client";
import { useParams, useNavigate } from "react-router-dom";

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

    return (
        <form onSubmit={handleUpdate}>
            <input name="name" value={crewmate.name} onChange={handleChange} />
            <select name="color" value={crewmate.color} onChange={handleChange}>
                <option value="">Select Color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                {/* ... */}
            </select>
            <select name="hat" value={crewmate.hat} onChange={handleChange}>
                <option value="">Select Hat</option>
                <option value="beanie">Beanie</option>
                <option value="cowboy">Cowboy</option>
                {/* ... */}
            </select>
            <button type="submit">Update</button>
            <button type="button" onClick={handleDelete}>
                Delete
            </button>
        </form>
    );
};

export default EditPost;
