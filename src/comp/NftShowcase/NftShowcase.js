import Nft1 from "../../assets/nft3.png";
import Nft2 from "../../assets/nft2.png";
import Nft3 from "../../assets/nft1.png";
import Qna from "../qna/qna";


import './NftShowcase.css'
import ScrollMenu from 'react-horizontal-scrolling-menu';
;




const NftData = [
    {
        url: Nft1,
        name: "NFT one",
        id:1
    },
    {
        url: Nft2,
        name: "NFT two",
        id: 2
    },
    {
        url: Nft3,
        name: "NFT one",
        id: 3
    }

 
  
    
];

export default function NftShowCase() {
   



    return (
        <div className="Containershowcase" id="about">
            <div className="CardContainercase">
               

                {NftData.map((nft) => (
                    <div className="Cardcase">
                        <img className="CardImg" src={nft.url}/>
                        {/*<div className="CardTittlecase">{nft.name}</div>*/}
                    </div>
                ))}
              

            </div>
            <div className="MainQnaContainer" >
                <Qna></Qna>
                <iframe className={"mainVideo"} src="https://www.instagram.com/reel/CgDvAEpKa4Z/?utm_source=ig_embed&amp;utm_campaign=loading"  ></iframe>
 </div>
        </div>
    );
}
