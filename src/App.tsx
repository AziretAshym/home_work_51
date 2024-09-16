import React, {useState} from 'react';
import './App.css';
import Numbers from "./components/numbers/numbers.tsx";

const App = () => {
    const startNumbers = [5, 11, 16, 23, 32];
    const [numbers, setNumbers] = useState<number[]>(startNumbers);

    const getRandomNum = (): number => {
        return Math.floor(Math.random() * (36 - 5 + 1)) + 5;
    };

    const getNewNumbersArray = () => {
        let newNumbersArray: number[] = [];

        const addNewNumber = (num: number) => {
            if (!newNumbersArray.includes(num)) {
                newNumbersArray.push(num);
            } else {
                let otherNum = getRandomNum();
                while (newNumbersArray.includes(otherNum)) {
                    otherNum = getRandomNum();
                }
                newNumbersArray.push(otherNum);
            }
        };

        while (newNumbersArray.length < 5) {
            addNewNumber(getRandomNum());
        }

        setNumbers(newNumbersArray);
    };

    return (
        <div className="container">
            <div className="numbersContainer">
                {numbers.map((num) => (
                    <p className="num" key={num}>
                        <Numbers number={num} />
                    </p>
                ))}
            </div>
            <button type="button" className="actionBtn" onClick={getNewNumbersArray}>
                Get new numbers
            </button>
        </div>
    );
};

export default App;
