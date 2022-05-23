import "./css/index.css";

export default function Breadcrumb({links}) {
    links.reverse();
    return (
        <div className="breadcrumbContainer">
            <ul className={"breadcrumbBody"}>
                {
                    links.length > 0 && links.map((link) => (
                        <li key={link.id}>{link.name}</li>
                    ))
                }
            </ul>
        </div>
    );
}