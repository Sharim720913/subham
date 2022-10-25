
import "./newsLetter.css"
export default function NewsLetter() {
    return (
        <div className={"Container2"}>
            <div className={"NewsLetterContainer"}>
                <div className={"HeadingText"}> Join Newsletter for Weekly Updates</div>
                <div className={"InputContainer"}>
                    <input className={"StyledInput"} placeholder="Enter your email" />
                    <button className={"SendButton"}>Send</button>
                </div>
            </div>
        </div>
    );
}