import staticData from "../../static";
import "./qna.css"

export default function () {
    return (
        <div>
            {" "}
            <div className="HeadingTextqna">{staticData.qAndA.metaKul.q}</div>
            <br />
            <div className="AnswerTextqna">{staticData.qAndA.metaKul.a}</div>
        </div>
    );
}