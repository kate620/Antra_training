import React, { useState, useEffect } from 'react';

const ingredientsList = [
  {
    id: '0',
    name: 'Kosher',
  },
  {
    id: '1',
    name: 'No Celery',
  },
  {
    id: '2',
    name: 'No Eggs',
  },
];

const App = () => {
  const Checkbox = ({ id, type, name, handleClick, isChecked }) => {
    return (
      <input
        id={id}
        name={name}
        type={type}
        onChange={handleClick}
        checked={isChecked}
      />
    );
  };

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setIngredients(ingredientsList);
  }, [ingredients]);

  const handleSelectAll = e => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(ingredients.map(item => item.name));
    if (isCheckAll) {
    }
  };

  const handleClick = e => {
    const { name, checked } = e.target;
    setIsCheck([...isCheck, name]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== name));
    }
  };

  const clearAll = () => {
    setIsCheck([]);
    setIsCheckAll(false);
  };

  const displayIngredients = ingredients.map(({ id, name }) => {
    return (
      <>
        <div className="inputs">
          <Checkbox
            key={id}
            type="checkbox"
            name={name}
            id={id}
            handleClick={handleClick}
            isChecked={isCheck.includes(name)}
          />
          <label>{name}</label>
        </div>
      </>
    );
  });

  return (
    <div className="form-container">
      <h1>
        Selected values:<br></br>
        {isCheck.join(', ')}
      </h1>
      <div className="selector">
        <Checkbox
          type="checkbox"
          name="selectAll"
          id="selectAll"
          handleClick={handleSelectAll}
          isChecked={isCheckAll}
        />
        Select All
        {displayIngredients}
        <div className="clearBtn">
          <button onClick={clearAll}>Clear All</button>
        </div>
      </div>
    </div>
  );
};
export default App;
