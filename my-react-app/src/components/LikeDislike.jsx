import { useState } from "react";

function LikeDislike() {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false); 

    const handleLike = () => {
        if (liked) {
            setLikes(likes - 1); 
        } else {
            setLikes(likes + 1);
        }
        setLiked(!liked); 
    };

    const handleDislike = () => {
        setLikes(likes - 1); 
    };

    return (
        <div>
            <h2>Likes: {likes}</h2>
            <button 
                onClick={handleLike} 
                style={{ backgroundColor: liked ? "green" : "black", color: "white" }}>
                Like
            </button>
            <button 
                onClick={handleDislike} 
                style={{ backgroundColor: "red", color: "white" }}>
                Dislike
            </button>
        </div>
    );
}

export default LikeDislike;
