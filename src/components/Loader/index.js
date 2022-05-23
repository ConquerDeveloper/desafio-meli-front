import "./css/index.css";

export default function Loader({isVisible}) {
    if (isVisible) {
        return <div className="loader">Loading...</div>
    } else {
        return null;
    }
}