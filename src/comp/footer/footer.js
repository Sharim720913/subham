import React from "react";
import "./footer.css"
import {
  
    MetaKulHeading,
    MetaKulHeading1

} from "./footercss";
import { Link } from "react-router-dom";
import Telegram from "../../assets/followus/telegram.png";
import Twitter from "../../assets/followus/twitter.png";
import Youtube from "../../assets/followus/youtube.png";
import Facebook from "../../assets/followus/facebook.png";
import Instagram from "../../assets/followus/instagram.png";
import Discord from "../../assets/social/discord.png";

export default function Footer() {
    return (
       <div>
        <div className="Container1">
            <div className="ItemContainer">
                <div className={"MetakulContainer"}>
                    <h1> Metakul</h1>
                    <span>
                        Meta-kul is a metaverse based nft project which aims to spread
                        awareness on blockchain WEB 3.0, NFT's, etc and we want our
                        educational system to be changed.
                    </span>
                </div>
                <div className="MetakulConnectionContainer">
                    <div className={"ExtraHeadingContainer"}>
                        <MetaKulHeading>Company </MetaKulHeading>
                            <div className={"MetaKulContent"}>   <Link activeClass="active" style={{ padding: "10px 15px" }} to="/" spy={true} smooth={true} offset={-80}>
                                Home
                            </Link> </div>
                            <div className={"MetaKulContent"}><a activeClass="active" style={{ padding: "10px 15px" }} href="/#about" spy={true} smooth={true} offset={-80}>
                                About
                            </a> </div>
                            <div className={"MetaKulContent"}><a activeClass="active" style={{ padding: "10px 15px" }} href="/roadmap" spy={true} smooth={true} offset={-80}>
                                Roadmap
                            </a></div>
                            <div className={"MetaKulContent"}><a activeClass="active" style={{ padding: "10px 15px" }} href="/#contact" spy={true} smooth={true} offset={-80}>
                                Contact
                            </a> </div>
                    </div>
                     <div className={"ExtraHeadingContainer"}>
                        <MetaKulHeading>Stats</MetaKulHeading>
                        <div className={"MetaKulContent"}>Rankings </div>
                        <div className={"MetaKulContent"}>Activity </div>
                    </div>
                     <div className={"ExtraHeadingContainer"}>
                        <MetaKulHeading>Resources</MetaKulHeading>
                        <div className={"MetaKulContent"}>Help Center</div>
                        <div className={"MetaKulContent"}>Gas-Free Mark</div>
                        <div className={"MetaKulContent"}>Activity </div>
                    </div>
                    
                    </div>
                <div className={"MetakulIconContainer"} id="contact">
                    <MetaKulHeading1>Connect With Us</MetaKulHeading1>
                    <div className={"MetakulIcon"}>
                            <div className={"FlexRow"} between>
                                <a activeClass="active" href="https://www.instagram.com/metakul.nft/" spy={true} smooth={true} offset={-80}>
                                    <img className={"IconSocial "} src={Instagram}></img>
                                </a>
                                
                                <a activeClass="active" href="https://telegram.me/+OqiC3gNJDQ1hY2Rl" spy={true} smooth={true} offset={-80}>
                                    <img className={"IconSocial "} src={Telegram}></img>
                                </a>
                                <a activeClass="active" href="https://twitter.com/metakul_" spy={true} smooth={true} offset={-80}>
                                
                                    <img className={"IconSocial "} src={Twitter}></img>
                                </a>
                                    <a activeClass="active" href="https://discord.gg/sRk3tZ9z3A" spy={true} smooth={true} offset={-80}>
                                    <img className={"IconSocial "} src={Discord}></img>
                                </a>
                                
                        </div>
                
                    </div>
                </div>
               
            </div>
                
               
       
        </div>
        <div className={"MetakulContainer2"}>
                    <h4> 2022 &copy; Metakul. All rights reserved.</h4>


                </div>
                </div>

    );
}
