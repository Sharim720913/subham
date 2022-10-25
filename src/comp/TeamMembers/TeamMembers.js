import React, { useEffect } from "react";
import "./TeamMembers.css";
import { FaAngleLeft, FaAngleRight, FaArrowsAltH } from "react-icons/fa";
import { rimorefill } from "react-icons/ri";

import Nft1 from "../../assets/nft/nft1.png";
import Ak from "../../assets/teamMembers/ak.png";
import Instagram from "../../assets/icon/instagram.png";
import LinedIn from "../../assets/icon/linkedIn.png";
import $ from "jquery";
const TeamMemberData = [
  {
    img: Ak,
    name: "Shubham Kunwar",
    instaGram: "",
    linkedIn: "",
    id: 1,
    role: "Blockchain developer",
  },
  {
    img: Ak,
    name: "Narendra Rauthan",
    instaGram: "",
    linkedIn: "",
    id: 2,
    role: "UI/UX Designer",
  },
  {
    img: Ak,
    name: "Ankush Tamta",
    instaGram: "",
    linkedIn: "",
    id: 3,
    role: "Blockchain developer",
  },
];

export default function TeamMember() {
  useEffect(() => {
    let num = $(".my-card").length;
    let even = num / 2;
    let odd = (num + 1) / 2;

    if (num % 2 == 0) {
      $(".my-card:nth-child(" + even + ")").addClass("active");
      $(".my-card:nth-child(" + even + ")")
        .prev()
        .addClass("prev");
      $(".my-card:nth-child(" + even + ")")
        .next()
        .addClass("next");
    } else {
      $(".my-card:nth-child(" + odd + ")").addClass("active");
      $(".my-card:nth-child(" + odd + ")")
        .prev()
        .addClass("prev");
      $(".my-card:nth-child(" + odd + ")")
        .next()
        .addClass("next");
    }
    $(".my-card").click(function () {
      let slide = $(".active").width();
      console.log($(".active").position().left);
      if ($(this).hasClass("next")) {
        $(".card-carousel")
          .stop(false, true)
          .animate({ left: "-=" + slide });
      } else if ($(this).hasClass("prev")) {
        $(".card-carousel")
          .stop(false, true)
          .animate({ left: "+=" + slide });
      }
      $(this).removeClass("prev next");
      $(this).siblings().removeClass("prev active next");
      $(this).addClass("active");
      $(this).prev().addClass("prev");
      $(this).next().addClass("next");
    });
    return () => {};
  }, []);

  const handlePrev = () => {
    $(".active").prev().trigger("click");
  };
  const handleNext = () => {
    $(".active").next().trigger("click");
  };

  return (
    <div className={"Container"} id="kul-team">
      <div className={"HeadingText"}> Team Members </div>
      <div className={"FlexRow"}>
        <div className={"CardContainer"}>
          {/* custom corausel */}
          <div>
            <div className="card-carousel" style={{ left: 0 }}>
              {TeamMemberData.map((ele, index) => {
                return (
                  <div
                    className="my-card"
                    prev={TeamMember.length > 2 && index == 0 ? true : false}
                    active={TeamMember.length > 2 && index === 1 ? true : false}
                    next={TeamMember.length > 2 && index === 2 ? true : false}
                  >
                    <img
                      style={{
                        // height: "100%",
                        width: "100%",
                        objectFit: "contain",
                      }}
                      src={ele.img}
                    ></img>

                    <div className={"ContentContainer"}>
                      <div className="CardText"> {ele.name}</div>
                      <div className="cardInfo"> {ele.role}</div>
                      <div className="FlexRow" between>
                        <div className={"IconContainer"}>
                          <img className={"Icon"} src={Instagram}></img>
                          <img className={"IconSmall"} src={LinedIn}></img>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button id="prev" onClick={handlePrev}>
                <FaAngleLeft />
              </button>

              <rimorefill />

              <button id="next" onClick={handleNext}>
                <FaAngleRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
