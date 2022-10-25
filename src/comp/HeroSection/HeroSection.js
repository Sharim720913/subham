

import { Link } from "react-router-dom";
import "./HeroSection.css"
import staticData from "../../static";


import Nft1 from "../../assets/nft1.png";
import Nft2 from "../../assets/nft2.png";
import Nft3 from "../../assets/nft3.png";





export default function HeroSection() {
    return (
        <div className="Containerhero">
            < div className="heroImageContainer">
                <img className="ImageRight" src={Nft3}></img>
                <img className="ImageTop" src={Nft1}></img>
                <img className="ImageLeft" src={Nft2}></img>
            </div>
            <div className="HeroTextContainer">
                <div className="HeroTitle"> {staticData.hero.mainLine} </div>
                <div className="FollowLine"> {staticData.hero.followLine}</div>
            </div>
            <div className="BlockChainWrapper">Blockchain</div>
            <div className="NftContainer">NFT</div>
            <div className="MetakulWarapper"> Metakul</div>
            <div className="MetaVerse">Metaverse</div>
        </div>
    );
}
