import logo from './logo.svg';
import './App.css';
import EightBall from './EightBall';
import { Answers } from './Answers';

function App() {
	return (
		<div className="EightBallContainer">
			<EightBall answers={Answers} />
		</div>
	);
}

export default App;
