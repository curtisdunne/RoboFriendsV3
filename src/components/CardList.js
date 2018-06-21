import React from 'react';
import Card from './Card.js';

const CardList = (props) => {
	const { robots } = props;

	return (
		<div>
			{
				robots.map(user => {
					return (
						<Card 
							key={user.id} 
							id={user.id} 
							name={user.name} 
							email={user.email} 
					   />
					);
				}) 
			}
		</div>
	);
}

export default CardList;