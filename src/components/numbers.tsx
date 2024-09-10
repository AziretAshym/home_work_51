import './numbers.css'

interface NumberProps {
    number: number;
}

const Numbers = ({number}) => {
    return (
        <div>
            <div className="number">
                {number}
            </div>
        </div>
    );
};

export default Numbers;