import React from "react";
import  "./NftCase.css";
import Nft1 from "../../assets/nft/nft1.png";




import staticData from "../../static";

export default function NftCase() {
    return (
        <div className="Containernft" >
            <img className="Imagenft" src={Nft1}></img>

            <div className="QaContainernft" >
                <div className="HeadingTextnft">{staticData.qAndA.nft.q} </div>
                <div className="AnswerTextnft">{staticData.qAndA.nft.a}</div>
            </div>
        </div>
    );
}
