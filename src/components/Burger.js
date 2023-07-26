import React, {useState} from 'react';

import './Burger.css';

const Burger = () => {
	const [items, setItems] = useState({
		lettuce: 0,
		tomato: 0,
		cheese: 0,
		meat: 0,
	});

	return (
		<>
			<div className='burger'>
				<div className='top-bun'></div>
				{items['lettuce'] + items['tomato'] + items['cheese'] + items['meat'] === 0 && <p>Add ingredients to your burger!</p>}
				<div className='burger-content'>
					{items['lettuce'] > 0 && Array.from(Array(items['lettuce'])).map((_, i) => <div key={i} className='lettuce'></div>)}
					{items['tomato'] > 0 && Array.from(Array(items['tomato'])).map((_, i) => <div key={i} className='tomato'></div>)}
					{items['cheese'] > 0 && Array.from(Array(items['cheese'])).map((_, i) => <div key={i} className='cheese'></div>)}
					{items['meat'] > 0 && Array.from(Array(items['meat'])).map((_, i) => <div key={i} className='meat'></div>)}
				</div>
				<div className='bottom-bun'></div>
			</div>

			<div className='cost'>Cost: {items['lettuce'] * 13 + items['tomato'] * 15 + items['cheese'] * 17 + items['meat'] * 30}₺</div>
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
