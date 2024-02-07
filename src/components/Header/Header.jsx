import './Header.scss';
import atomImg from '../../assets/react-core-concepts.png';

// Random description
const reactDescriptions = ['Fundamental', 'Core', 'Crucial'];

function genRandomDesc(max) {
    return Math.floor(Math.random() * (max + 1));
}


export default function Header() {
    const description = reactDescriptions[genRandomDesc(2)];

    return (
        <div id="scopedHeader">
            <header>
                <img src={atomImg} alt="Stylized atom" />
                <h1>React Essentials</h1>
                <p>
                    <u>{description}</u> React concepts you will need for almost any app you are
                    going to build!
                </p>
            </header>
        </div>
    );
}