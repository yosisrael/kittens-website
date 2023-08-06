import Kitten from './Components/AnimalArea/Kitten/kitten';
import './App.css';
import AnimalFood from './Components/FoodArea/AnimalFood/AnimalFood';

function App(): JSX.Element {
    return (
        <div className='App'>
            <h1>Hello this is my Kittens website</h1>
            <Kitten />
            <Kitten />
            <Kitten />
            <AnimalFood />
        </div>
    );
}

export default App;
