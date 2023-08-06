import "./AnimalFood.css"
import animalFoodSource from "../../../assets/images/shopping.webp"

function AnimalFood(): JSX.Element {
    return (
        <div className="AnimalFood">
            <h2>Animal Food</h2>

            <img src={animalFoodSource} />

            <div>
                Description: this is an amazing food...
            </div>

            <span>Price: $10</span>
        </div>
    )
}

export default AnimalFood