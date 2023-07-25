import React, {useState, useEffect} from 'react';

import './Burger.css';

const Burger = () => {
	const [items, setItems] = useState({
		lettuce: 0,
		tomato: 0,
		cheese: 0,
		meat: 0,
	});

	useEffect(() => {
		document.querySelector('.burger-content').innerHTML = '';
		for (let i = 0; i < items['lettuce']; i++) {
			let lettuce = document.createElement('div');
			lettuce.className = 'lettuce';
			document.querySelector('.burger-content').appendChild(lettuce);
		}
		for (let i = 0; i < items['tomato']; i++) {
			let tomato = document.createElement('div');
			tomato.className = 'tomato';
			document.querySelector('.burger-content').appendChild(tomato);
		}
		for (let i = 0; i < items['cheese']; i++) {
			let cheese = document.createElement('div');
			cheese.className = 'cheese';
			document.querySelector('.burger-content').appendChild(cheese);
		}
		for (let i = 0; i < items['meat']; i++) {
			let meat = document.createElement('div');
			meat.className = 'meat';
			document.querySelector('.burger-content').appendChild(meat);
		}
	}, [items]);

	return (
		<>
			<div className='burger'>
				<div className='top-bun'></div>
				{items['lettuce'] + items['tomato'] + items['cheese'] + items['meat'] === 0 && <p>Add ingredients to your burger!</p>}
				<div className='burger-content'></div>
				<div className='bottom-bun'></div>
			</div>

			<div className='cost'>Cost: {items['lettuce'] * 13
				+ items['tomato'] * 15
				+ items['cheese'] * 17
				+ items['meat'] * 30
			}₺</div>
			<div className='ingredients'>
				<p>Lettuce</p>
				<button
					className='ingredient-btn'
					onClick={() =>
						setItems({
							...items,
							lettuce: items['lettuce'] + 1,
						})
					}
				>Add</button>
				<button
					className='ingredient-btn'
					onClick={() =>
						setItems({
							...items,
							lettuce: items['lettuce'] - 1 < 0 ? 0 : items['lettuce'] - 1,
						})
					}
				>Remove</button>

				<p>Tomato</p>
				<button
					className='ingredient-btn'
					onClick={() =>
						setItems({
							...items,
							tomato: items['tomato'] + 1,
						})
					}
				>Add</button>
				<button
					className='ingredient-btn'
					onClick={() =>
						setItems({
							...items,
							tomato: items['tomato'] - 1 < 0 ? 0 : items['tomato'] - 1,
						})
					}
				>Remove</button>

				<p>Cheese</p>
				<button
					className='ingredient-btn'
					onClick={() =>
						setItems({
							...items,
							cheese: items['cheese'] + 1,
						})
					}
				>Add</button>
				<button
					className='ingredient-btn'
					onClick={() =>
						setItems({
							...items,
							cheese: items['cheese'] - 1 < 0 ? 0 : items['cheese'] - 1,
						})
					}
				>Remove</button>

				<p>Meat</p>
				<button
					className='ingredient-btn'
					onClick={() =>
						setItems({
							...items,
							meat: items['meat'] + 1,
						})
					}
				>Add</button>
				<button
					className='ingredient-btn'
					onClick={() =>
						setItems({
							...items,
							meat: items['meat'] - 1 < 0 ? 0 : items['meat'] - 1,
						})
					}
				>Remove</button>
			</div>
		</>
	);
};

export default Burger;
