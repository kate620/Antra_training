import React, { useEffect, useState } from 'react';

const foodData = [
  { name: 'Kosher' },
  { name: 'No Celery(inc celeriac)' },
  { name: 'No egg' },
];

function App() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    setFoods(foodData);
  }, []);

  const handleChange = e => {
    const { name, checked } = e.target;
    if (name === 'allSelect') {
      let tempFood = foods.map(food => {
        return { ...food, isChecked: checked };
      });
      setFoods(tempFood);
    } else {
      let tempFood = foods.map(food =>
        food.name === name ? { ...food, isChecked: checked } : food
      );
      setFoods(tempFood);
    }
  };

  return (
    <div className="container my-4" style={{ width: '500px' }}>
      <form className="form w-100">
        <h3> Selected Value:{handleChange}</h3>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="allSelect"
            checked={!foods.some(food => food?.isChecked !== true)}
            onChange={handleChange}
          />
          <label className="form-check-label ms-2">All Select</label>
        </div>
        {foods.map((food, index) => (
          <div className="form-check" key={index}>
            <input
              type="checkbox"
              className="form-check-input"
              name={food.name}
              checked={food?.isChecked || false}
              onChange={handleChange}
            />
            <label className="form-check-label ms-2">{food.name}</label>
          </div>
        ))}
        <button checked={!foods?.isChecked || false} onChange={handleChange}>
          Clear All
        </button>
      </form>
    </div>
  );
}

export default App;
