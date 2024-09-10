import './numbers.css'

interface NumberProps {
    number: number;
}

const Numbers: React.FC<NumberProps> = ({number}) => {
    return (
        <div>
            {number}
        </div>
    );
};

export default Numbers;