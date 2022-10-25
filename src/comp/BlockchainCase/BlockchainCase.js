
import Nft1 from "../../assets/nft/nft1.png";
import staticData from "../../static";
import "./BlockchainCase.css"
export default function BlockChainCase() {
    return (
        <div className="blockContainer">
            <div className="QaContainerRight">
                <div className="HeadingText">{staticData.qAndA.blockChain.q} </div>
                <div className="AnswerText">{staticData.qAndA.blockChain.a}</div>
            </div>
            <br></br>
            <img className="Image" src={Nft1}></img>
        </div>
    );
}

