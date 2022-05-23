import Menu from "../../components/Menu";
import {Link, useLocation} from "react-router-dom";
import './css/index.css';
import Card from "../../components/Card";
import {useEffect, useState} from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Loader from "../../components/Loader";

export default function Items() {
    const {state: {search}} = useLocation();
    const [searchResult, setSearchResult] = useState([]);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        setSpinner(true);
        (async () => {
            const data = await fetch(`http://localhost:3000/api/items?q=:${search}`, {
                method: "GET",
                headers: {
                    "Content-Type": "text/plain"
                },
            });
            const status = data.status;
            if (status === 200) {
                setSpinner(false);
                setSearchResult(await data.json());
            }
        })();
    }, [search]);

    return (
        <div className={'itemsContainer'}>
            <Menu/>
            <Loader isVisible={spinner}/>
            <Breadcrumb links={searchResult[0]?.categories || []}/>
            <div className={"itemsBody"}>
                {
                    searchResult && searchResult.length > 0 &&
                    <Card>
                        {
                            searchResult.map((result, index) => (
                                result.items.map((item) => (
                                    <div className={"feedItemContainer"} key={item.id}>
                                        <div className="feedItem">
                                            <div className="imgPreviewContainer">
                                                <img src={item.picture}
                                                     width={"200"}
                                                     alt="iPhone"/>
                                            </div>
                                            <div className="itemDescriptionContainer">
                                                <h1>{`${item?.price?.currency} ${item?.price?.decimals}`}</h1>
                                                <p>{item?.title}</p>
                                            </div>
                                            <div className="feedActionBtnContainer">
                                                <Link to={`/items/${item.id}`}>
                                                    <button type="button">Detalles</button>
                                                </Link>
                                            </div>
                                        </div>
                                        <hr/>
                                    </div>
                                ))
                            ))
                        }
                    </Card>
                }
            </div>
        </div>
    );
}