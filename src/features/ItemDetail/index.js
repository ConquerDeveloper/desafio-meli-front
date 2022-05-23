import React, {useState, useEffect} from "react";
import Menu from "../../components/Menu";
import "./css/index.css";
import Card from "../../components/Card";
import Breadcrumb from "../../components/Breadcrumb";
import {useParams} from "react-router-dom";
import Loader from "../../components/Loader";


export default function ItemDetail(props) {
    const [itemDetail, setItemDetail] = useState(null);
    const [spinner, setSpinner] = useState(false);
    const {id} = useParams();
    useEffect(() => {
        setSpinner(true);
        (async () => {
            const data = await fetch(`http://localhost:3000/api/item/${id}`, {
                headers: {
                    'Content-Type': 'text/plain'
                },
                method: 'GET'
            });
            const status = data.status;
            if (status === 200) {
                setSpinner(false);
                setItemDetail(await data.json());
            }
        })();
    }, [id]);

    return (
        <div className={"detailBody"}>
            <Menu/>
            <Loader isVisible={spinner}/>
            <Breadcrumb links={itemDetail?.items?.categories || []}/>
            <div className="itemContainer">
                {
                    itemDetail &&
                    <Card>
                        <div className={"detailContainer"}>
                            <div className="imgPreviewContainer">
                                <img src={itemDetail.items.picture}
                                     width={"800"}
                                     alt="iPhone"/>
                            </div>
                            <div className={"descriptionContainer"}>
                                <h1>{itemDetail.items.title}</h1>
                                <p>{`${itemDetail?.items?.price?.currency} ${itemDetail?.items?.price?.decimals}`}</p>
                                <button type={"button"}>Comprar</button>
                            </div>
                        </div>
                        <div className="descriptionSummaryContainer">
                            <h1>Descripción del producto</h1>
                            <p>{itemDetail?.items?.description}</p>
                        </div>
                    </Card>
                }
            </div>
        </div>
    );
}