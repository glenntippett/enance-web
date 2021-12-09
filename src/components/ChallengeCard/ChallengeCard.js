export const ChallengeCard = ({ id, title, description, challengeType, card, cardText }) => {
	return (
		<article style={card} key={id}>
			<h5>{title.length > 20 ? `${title.substring(0, 22)}...` : title}</h5>
			<p style={cardText}>
				{description.length > 100 ? `${description.substring(0, 100)}...` : description}
			</p>
		</article>
	);
};
