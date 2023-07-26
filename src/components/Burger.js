import React, {useState, useEffect} from 'react';

import './Burger.css';

const Burger = () => {
	const [items, setItems] = useState({
		lettuce: 0,
		tomato: 0,
		cheese: 0,
		meat: 0,
	});

	const [cost, setCost] = useState(0);

	const addOrRemoveIngredient = (ingredient, action) => {
		if (action === 'add') {
			setItems({
				...items,
				[ingredient]: items[ingredient] + 1,
			});
		} else if (action === 'remove') {
			setItems({
				...items,
				[ingredient]: items[ingredient] - 1 < 0 ? 0 : items[ingredient] - 1,
			});
		} else {
			console.log('Invalid action!');
		}
	}

	useEffect(() => {
		setCost(items['lettuce'] * 13 + items['tomato'] * 15 + items['cheese'] * 17 + items['meat'] * 30);
	}, [items]);

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

			<div className='cost'>Cost: {cost}₺</div>
			<div className='ingredients'>
				<p>Lettuce</p>
				<button
					className='ingredient-btn'
					onClick={() => addOrRemoveIngredient('lettuce', 'add')}
				>Add</button>
				<button
					className='ingredient-btn'
					onClick={() => addOrRemoveIngredient('lettuce', 'remove')}
				>Remove</button>

				<p>Tomato</p>
				<button
					className='ingredient-btn'
					onClick={() => addOrRemoveIngredient('tomato', 'add')}
				>Add</button>
				<button
					className='ingredient-btn'
					onClick={() => addOrRemoveIngredient('tomato', 'remove')}
				>Remove</button>

				<p>Cheese</p>
				<button
					className='ingredient-btn'
					onClick={() => addOrRemoveIngredient('cheese', 'add')}
				>Add</button>
				<button
					className='ingredient-btn'
					onClick={() => addOrRemoveIngredient('cheese', 'remove')}
				>Remove</button>

				<p>Meat</p>
				<button
					className='ingredient-btn'
					onClick={() => addOrRemoveIngredient('meat', 'add')}
				>Add</button>
				<button
					className='ingredient-btn'
					onClick={() => addOrRemoveIngredient('meat', 'remove')}
				>Remove</button>
			</div>
		</>
	);
};

export default Burger;
