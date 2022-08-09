import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initiaState = [
    { id: 1, value: 0, name: "Ненужная вещь", price: "200" },
    { id: 2, value: 0, name: "Ложка" },
    { id: 3, value: 4, name: "Вилка" },
    { id: 4, value: 0, name: "Тарелка" },
    { id: 5, value: 0, name: "Набор минималиста" },
  ];

  const [counetrs, setCounters] = useState(initiaState);
  const handleDelete = (id) => {
    console.log("handleDelete", id);

    const newCounter = counetrs.filter((c) => c.id !== id);
    setCounters(newCounter);
    console.log(newCounter);
  };

  const handleIncrement = (value) => {
    console.log("handleIncrement", value);
    const newCounterIncrement = counetrs.map((item) => item.value + 1);
    setCounters(newCounterIncrement);
  };
  const handleDecrement = (value) => {
    console.log("handleDecrement", value);
    const newCounterDecrement = counetrs.map((item) => item.value - 1);
    setCounters(newCounterDecrement);
  };

  const handleReset = () => {
    setCounters(initiaState);
    console.log("handle reset");
  };

  return (
    <>
      {counetrs.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
