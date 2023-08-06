import "./kitten.css"
import kittenSource from "../../../assets/images/cute_kitten.jpeg"

function Kitten(): JSX.Element {
    return (
        <div className="Kitten">
            <h1>Kitten</h1>
            <div className="cool">Cute Kitten:</div>
            <img src={kittenSource} />
            <br />
            <span>Price: $50</span>
        </div>);
}

export default Kitten;