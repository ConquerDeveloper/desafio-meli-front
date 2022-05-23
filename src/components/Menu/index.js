import React, {useState} from "react";
import './css/index.css';
import {Link, useNavigate} from "react-router-dom";

export default function Menu() {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/items?search=${inputValue}`, {state: {search: inputValue}});
    };

    return (
        <>
            <header>
                <div className="menuContentContainer">
                    <div className='logoContainer'>
                        <Link to={"/"}>
                            <img
                                src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__large_plus.png"
                                alt="Logo"/>
                        </Link>
                    </div>
                    <form id={"searchForm"} onSubmit={handleSearch}>
                        <div className="searchContainer">
                            <input type="search" className="searchBox" value={inputValue}
                                   onChange={e => setInputValue(e.target.value)} placeholder='Nunca dejes de buscar'/>
                            <div className="searchIconContainer">
                                <button type="submit">
                                    <i className="fa fa-search"/>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </header>
        </>
    );
}