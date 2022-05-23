import "./css/index.css";

export default function Card(props) {
    return (
        <div className="cardContainer">
            {props.children}
        </div>
    )
}