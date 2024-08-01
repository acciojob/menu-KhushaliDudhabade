import React, { useState } from 'react'
import './Styles/App.css'
import {dishes} from './Styles/data'

const allCategories = ['all', ...new Set(dishes.map((dish) => dish.category))];

function Menu() {
  const [dishItems, setDishItems] = useState(dishes);
  const [categories, setCategories] = useState(allCategories);

  const filterDishes = (category) => {
    if (category === 'all') {
      setDishItems(dishes);
      return;
    }
    const newDishes = dishes.filter((dish) => dish.category === category);
    setDishItems(newDishes);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <div className="categories">
          {categories.map((category, index) => (
            <button
              type="button"
              className="filter-btn"
              key={index}
              onClick={() => filterDishes(category)}>
              {category}
            </button>
          ))}
        </div>
        <div className="dish-list">
          {dishItems.map((dish) => (
            <article key={dish.id} className="dish-item">
              <img src={dish.img} alt={dish.title} className="dish-photo"/>
              <div className="dish-info">
                <header>
                  <h4>{dish.title}</h4>
                  <h4 className="price">${dish.price}</h4>
                </header>
                <p className="dish-text">{dish.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Menu;