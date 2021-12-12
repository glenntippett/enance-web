import { ButtonPrimary } from '../Button/Button';
import { Link } from 'react-router-dom';
import './ChallengeCard.css';

export const ChallengeCard = ({ id, title, description, challengeType }) => {
	return (
		<article className="card" key={id}>
			<h5>{title.length > 20 ? `${title.substring(0, 22)}...` : title}</h5>
			<p className="cardText">
				{description.length > 100 ? `${description.substring(0, 100)}...` : description}
			</p>
			<Link to={`/challenges/${id}`}>
				<ButtonPrimary buttonText="View challenge"/>
			</Link>
		</article>
	);
};
