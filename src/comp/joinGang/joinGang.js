import React from "react";
import "./joinGang.css"
import Discord from "../../assets/social/discord.png";
import LinkedIn from "../../assets/social/linkedin.png";
import { Link } from "react-router-dom";

export default function JoinGang() {
    return (
        <div >
            <div className="">
                <div className="HeadingText"> Join The Metakul Gang</div>
            </div>
            <div className={"ButtonContiner"}>
                <div className="FlexRow1">
                    <div className="Button" style={{marginRight:"20px"}}>

                        <img className={"Icon"} src={Discord}></img>
                        <a style={{ color: "white" }} href="https://discord.gg/sRk3tZ9z3A" activeStyle={{ fontWeight: "bold", }}>
                            Discord
                        </a>
                    </div>
                    <div className="Button">
                        <img className={"Icon"} src={"https://cdn.dribbble.com/userupload/2582878/file/original-46062a272986850aa42a84b6d9ab17b0.png?compress=1&resize=450x338&vertical=top"}></img>
                        <Link  to="/mint" activeStyle={{ fontWeight: "bold", }}>
                            Metaverse
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}