import React, { useState } from 'react';
import { getAnswerIdx, Answers } from './Answers';
import './EightBall.css';

const EightBall = (props) => {
	const Answers = props.answers;
	const startMessage = { msg: 'Think of a Question.', color: 'black' };
	const [
		answer,
		setAnswer
	] = useState(startMessage);

	return (
		<div
			className="EightBall"
			style={{ backgroundColor: answer.color }}
			onClick={() => setAnswer(getAnswerIdx(Answers))}
		>
			<div>{answer.msg} </div>
		</div>
	);
};

export default EightBall;
