import { BsFillStarFill } from "react-icons/bs";
import "./StarIcon.css";
// eslint-disable-next-line react/prop-types
const StarIcon = ({ color = "#fff" }) => {
    return (
        <div className="icon-parent relative" style={{ "--color": color }}>
            <div className="star-icon">
                <BsFillStarFill className="relative my-3" />
            </div>
        </div>
    );
};

export default StarIcon;
